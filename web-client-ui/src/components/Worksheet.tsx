import {useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

function Worksheet(props) {


    const textAreaRef = useRef<HTMLDivElement>(null);

    const normalFont = (text) => {
        return <span>{text}</span>
    }

    const keyWordFont = (text) => {
        return <span className='text-warning fw-bold'>{text}</span>
    }

    const handleBlur = () => {

        console.log('do nothing');
        console.log(textAreaRef.current.innerText);
    }

    const handleKeyUp = (eve) => {

        const thisDiv = textAreaRef.current;

        const keywords = ["SELECT","FROM","WHERE","LIKE","BETWEEN","NOT LIKE","FALSE","NULL","FROM","TRUE","NOT IN"];

        if (eve.keyCode === 32) {
            let newHTML = "";
            // Loop through words
            thisDiv.innerText.replace(/[\s]+/g, " ").trim().split(" ").forEach(function (val) {
                // If word is statement
                if (keywords.indexOf(val.trim().toUpperCase()) > -1)
                    newHTML += "<span class='text-warning fw-bold'>" + val + "&nbsp;</span>";
                else
                    newHTML += "<span>" + val + "&nbsp;</span>";
            });
            thisDiv.innerHTML = newHTML;

            const child = thisDiv.children;
            const range = document.createRange();
            const sel = window.getSelection();
            range.setStart(child[child.length-1], 1);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
            thisDiv.focus();

        }
    };

    const onExecuteClick = () => {
        console.log(textAreaRef.current.textContent);
        props.setQuery(textAreaRef.current.textContent);
        props.executeQuery(textAreaRef.current.textContent);
    }

    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="worksheet-tab" role="tablist">
                    <button className="nav-link active bg-secondary border-0 border-bottom border-success border-2"
                            id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true">Query
                    </button>
                </div>
            </nav>
            <div className="tab-content bg-secondary" id="worksheet-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                     aria-labelledby="nav-home-tab">
                    <div className=''>
                        <button className="btn btn-success btn-sm mt-2 me-2 float-end" onClick={() => onExecuteClick()}>
                            <FontAwesomeIcon icon={faPlay} className="ms-2 me-2"/>
                            Execute
                        </button>
                    </div>
                    <div className={'p-3 font-monospace'}>
                        <div
                            style={{height: '300px'}}
                            ref={textAreaRef}
                            contentEditable="true"
                            onKeyUp={handleKeyUp}
                            onBlur={handleBlur}
                            className='no-border-text-area'>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Worksheet;