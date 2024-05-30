import {useEffect, useState} from "react";
import {faTable} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Tables(props) {

    const [tables, setTables] = useState<string[]>([])

    const products_db = ['product', 'category', 'product_details']
    const invoice_db = ['invoice', 'payment_method', 'card_details']

    useEffect(() => {
        if (props.connection === 'products_db') {
            setTables(products_db);
        }else{
            setTables(invoice_db)
        }
    }, [props]);

    return (
        <>
            <div className='mt-3 border-top border-secondary border-2'>
                <h6 className='mt-3'>Recent Queries</h6>
                <div className='font-monospace bg-secondary p-2'>
                    select * from product
                </div>
            </div>
            <div className='mt-3 border-top border-secondary border-2'>
                <h6 className='mt-3'>Tables</h6>
                <div className='font-monospace ps-2 pe-2'>
                    {tables && tables.map((table) => (
                        <div key={table}>
                            <FontAwesomeIcon className='text-success mt-3 pe-3 ps-2' icon={faTable}/>
                            {table}

                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Tables