
import PDFView from './pdfview.jsx';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from "react";
import axios from 'axios';

function Assignment(props){
    const{ id } = useParams();
    const [data, setData] = useState("");
    const [head, setHead] = useState("");
    const [due, setDue] = useState("");
    axios.get("http://localhost:8080/api/assignment/" + id)
        .then(function(response){
            setData(response.data.data);
            setHead(response.data.title)
            setDue(response.data.due);
        })
    
    return (
    <>
        <h1 style={{padding: "20px"}}>{head}</h1>
        <span>Due: {due}</span>
            <PDFView url = {data} />
    </>
    );
}

export default Assignment;