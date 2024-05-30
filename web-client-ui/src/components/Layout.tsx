import SideNavigation from "./SideNavigation.tsx";
import Connections from "./Connections.tsx";
import Tables from "./Tables.tsx";
import Worksheet from "./Worksheet.tsx";
import Results from "./Results.tsx";
import {useState} from "react";

function Layout() {

    const dataSource1 = {
        host: "192.168.56.105",
        database: "product_db",
        username: "product_user",
        password: "password",
        port: 5432
    }

    const dataSource2 = {
        host: "192.168.56.105",
        database: "invoice_db",
        username: "invoice_user",
        password: "password",
        port: 5433
    }


    const [dataSource, setDataSource] = useState(dataSource1)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState({})


    const executeQuery = (queryArg) => {


        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Accept-Encoding': 'application/json'
            },
            body: JSON.stringify({dataSource: dataSource, query: queryArg})
        };
        fetch('http://localhost:8080/api', requestOptions)
            .then(response => response.json())
            .then(data => setResults(data));
    }

    return (
        <div className="vw-100 overflow-hidden">
            <div className="row vh-100">
                <div className="col-2 border-end border-secondary border-2">
                    <div className="row">
                        <div className="col-3">
                            <SideNavigation/>
                        </div>
                        <div className="col-9">
                            <Connections setDataSource={setDataSource} dataSource1={dataSource1}
                                         dataSource2={dataSource2}/>
                            <Tables connection={'products_db'}/>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <Worksheet executeQuery={executeQuery} setQuery={setQuery}/>
                    <Results results={results}/>
                </div>
            </div>
        </div>

    );
}

export default Layout;