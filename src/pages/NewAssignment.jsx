import { useState, useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import Assignment from "../components/Assignment";
import styled from "styled-components";

const NewAssignment = () => {
    return (    
        <div>
            <h1 className="px-2" style = {{color: "#56a8d0", lineHeight: 2}}>New Assignment</h1>
            <TabGroup />
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
        <p />
        <p> Your payment selection: {active} </p>
      </>
    );
  }
  const types = ["Post", "Assignment"];
  

export default NewAssignment;