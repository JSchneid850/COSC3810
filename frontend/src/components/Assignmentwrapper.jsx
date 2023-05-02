
import React from "react";  

function Assignmentwrapper({ assignments }) {
    return (
        <div className="wrapper">
            {assignments.map((assignment, index) => (
                <div className="assignment" key={index}>
                    <a href={`/assignment/${assignment.id}`}>{assignment.title}</a>
                    <p>{assignment.description}</p>
                    <p>{assignment.due_date}</p>
                    <br/>
                </div>
            ))}
        </div>
    );
}


export default Assignmentwrapper;