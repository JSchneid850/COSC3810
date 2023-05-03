
import React from "react";  

function Assignmentwrapper({ assignments }) {
    return (
        <div className="wrapper">
            {assignments.map((assignment, index) => (
                <div className="assignment" key={index}>
                    <h3>{assignment.title}</h3>
                    <p>Due: {assignment.dueDate.substring(0,10)}</p>
                    <a class="btn btn-primary" href={`/assignment/${assignment._id}`} role="button">Open</a>
                    <hr/>
                </div>
            ))}
        </div>
    );
}


export default Assignmentwrapper;