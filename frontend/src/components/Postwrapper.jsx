import React from "react";

function Postwrapper({ posts }) {
    return (
        <div className="wrapper">
            {posts.map((post, index) => (
                <div className="post" key={index}>
                    <h4>{post.title}</h4>
                    <p>{post.post}</p>
                    <p>{post.time.substring(0,16)}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default Postwrapper;