
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
          <h1 style ={{color: "#56a8d0", lineHeight: 2}}>Home</h1>
          <h3>Classes</h3>
          <div className="fluid-container">
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <Link to="/Cosc2100" className="btn btn-outline-success">COSC2100</Link>
                    <Link to="/Cosc3810" className="btn btn-outline-success">COSC3810</Link>
                    <Link to="/Cosc4920" className="btn btn-outline-success">COSC4920</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        <h3 style ={{lineHeight: 2}}>Assignments</h3>
        <p>Due 03-31-2023
        
        </p>
      </div>
    );
  };

  export default Home;