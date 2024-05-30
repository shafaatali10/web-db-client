import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDatabase, faBarChart, faCogs, faFloppyDisk} from '@fortawesome/free-solid-svg-icons'

function SideNavigation() {
    return (
        <div className='vh-100 bg-dark p-2 text-center'>
            <FontAwesomeIcon size='lg' className='text-success p-2' icon={faDatabase}/>
            <div className='m1'>&nbsp;</div>
            <FontAwesomeIcon size='lg' className='text-success p-2' icon={faFloppyDisk}/>
            <div className='m1'>&nbsp;</div>
            <FontAwesomeIcon size='lg' className='text-success p-2' icon={faBarChart}/>
            <div className='m1'>&nbsp;</div>
            <FontAwesomeIcon size='lg' className='text-success p-2' icon={faCogs}/>
        </div>
    );
}

export default SideNavigation;