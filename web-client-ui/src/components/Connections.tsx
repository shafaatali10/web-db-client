import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Connections(props) {
    return (
        <div className='mt-3'>
            <button className="btn btn-success w-100">
                <FontAwesomeIcon icon={faPlus} className="ms-2 me-2"/>
                Add new connection
            </button>
            <select className='p-2 w-100 mt-3' aria-label="Default select example" defaultValue={'1'}>
                <option value="1">product_user@192.168.56.105:5432</option>
                <option value="2">invoice_user@192.168.56.105:5433</option>
            </select>

        </div>
    );
}

export default Connections;