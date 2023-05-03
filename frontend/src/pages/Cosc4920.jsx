import "../Class.css"

function Cosc4920(){
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/assignment/class/COSC4910")
    .then(function(response){
      setAssignments(response.data);
    })
  }, []);

const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/post/class/COSC4910")
    .then(function(response){
      setPosts(response.data);
    })
  }, []);

    return (
      <>
      <h1 className="p-3">COSC 4910</h1>
      <div className="float-container">

        <div className="float-assignment">
          <div className="held">
            <h2>Assignments</h2>
            <hr/>
            <Assignmentwrapper assignments={assignments}/>
          </div>
        </div>

        <div className="float-post">
          <div className="held">
            <h2>Posts</h2>
            <hr/>
            <Postwrapper posts={posts}/>
          </div>
        </div>

      </div>     
    </>
    );
  };


  
  export default Cosc4920;