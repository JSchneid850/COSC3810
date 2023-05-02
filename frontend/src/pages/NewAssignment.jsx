import { useState, useEffect} from "react";
import styled from "styled-components";
import "../Layout.css";
import Axios from "axios";
import Popup from 'reactjs-popup';


const NewAssignment = () => {
  return (    
    <div>
      <h1 className="px-2" style = {{color: "#56a8d0", lineHeight: 2}}>New Assignment</h1>
      <div style={{padding: "30px"}}>
          <TabGroup />
      </div>    
    </div>
  )
}

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  color: greenblue;
  opacity: 0.6;
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #61dafb;
    opacity: 1;
  `}
`;

function TabGroup() {
    const [active, setActive] = useState(types[0]);
    return (
      <>
        <div>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          ))}
        </div>
        <div>
            {conditional(active)}
        </div>
      </>
    );
  }

function conditional(tab){
  if (tab === "Post"){
    return (
      <form onSubmit={handlePost}>
        <table>
        <span>Class: </span>
          <select id="class">
            <option value="COSC2100">COSC2100</option>
            <option value="COSC3810">COSC3810</option>
            <option value="COSC4920">COSC4910</option>
          </select>
          <tr>
            <input type="text" class="title" placeholder="Title" id="title"/>
          </tr>
          <tr>
            <textarea class="textbox" id="post"/>
          </tr>
        </table>

        <input type="submit" value="Submit"  />
      </form>
    )
  }
  if (tab === "Assignment"){
    return (
      <form onSubmit={handleAssignment}>
        <table>
          <span>Class: </span>
            <select id="class">
              <option value="COSC2100">COSC2100</option>
              <option value="COSC3810">COSC3810</option>
              <option value="COSC4920">COSC4910</option>
            </select>
            <span> Due: </span>
            <input type="date" id="due" name="due" />

            <tr>
              <input type="text" class="title" placeholder="Title" id="title"/>
            </tr>
        </table>
        <input type="file" id="file" name="file" />
        <Popup trigger={<input type="submit" value="Submit" />}>
          <div>Assignment Uploaded!</div>
        </Popup>
      </form>
    )
  }
}

const types = ["Post", "Assignment"];

const handlePost = async (event) =>{
  event.preventDefault();
  const d = new Date();
  const url = 'http://localhost:8080/api/post';
  console.log(event.target.class.value);
  let data = {
    class: event.target.class.value,
    title: event.target.title.value,
    post: event.target.post.value,
    time: d.toString()
  }
  console.log(data);
  await Axios.post(url, data).then((response) => {
    console.log(response);
  }).catch((err) => {
      if(err.response){
        console.log(err.response);
        console.log("server responded");
      }else if(err.request){
        console.log("network error");
      }else{
        console.log(err);
      }
  })
  window.location.reload();
}


async function postRequest (file, event){
  const d = new Date();
  const url = 'http://localhost:8080/api/assignment';
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    let data = {
      class: event.target.class.value,
      due: event.target.due.value,
      title: event.target.title.value,
      data: reader.result,
      time: d.toString()
    }
    console.log(data);
    Axios.post(url, data).then((response) => {
      console.log(response);
    }).catch((err) => {
        if(err.response){
          console.log(err.response);
          console.log("server responded");
        }else if(err.request){
          console.log("network error");
        }else{
          console.log(err);
        }
    })
  }
}


const handleAssignment = async (event) => {
  event.preventDefault();
  let selectedFile = event.target.file.files[0];
  console.log(selectedFile);
  await postRequest(selectedFile, event);
}



export default NewAssignment;