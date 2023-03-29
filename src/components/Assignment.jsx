
import PDFView from './pdfview.jsx';

function Assignment(props){
    return (
    <>
        <h1 style={{padding: "20px"}}>{props.head}</h1>
            <PDFView url = {props.pdfUrl} />
    </>
    );
}

export default Assignment;