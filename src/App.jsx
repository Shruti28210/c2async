import React from 'react'
import axios from "axios";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import './App.css'

function App() {
  const [box,setBox] = React.useState(false)
  const [data,setData] = React.useState([]);

  const fetchdata = () =>{
    axios.get("http://localhost:8080/students").then((res) => {
        setData(res.data);
    })
  }

  React.useEffect(() => {
    fetchdata()
  },[])


  return (
    <div className="App">
      <button className="togglebtn" onClick={() => setBox(!box)}>{box ? "go to students list" : "Add a new student"}</button>
      {box ? <AddStudent fetchdata={fetchdata}/> : <ShowStudents data = {data}/>}
      {/* <AddStudent fetchdata={fetchdata}/>
      <ShowStudents data = {data}/> */}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
