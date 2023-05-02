
import React from "react";

function Assignmentwrapper({ assignments }) {
    return (
        <div className="wrapper">
            {assignments.map((assignment, index) => (
                <div className="assignment" key={index}>
                    <h3>{assignment.title}</h3>
                    <p>{assignment.description}</p>
                    <p>{assignment.due_date}</p>
                </div>
            ))}
        </div>
    );
}


export default Assignmentwrapper;