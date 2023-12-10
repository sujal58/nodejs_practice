import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Await, Link } from "react-router-dom";
//import CreateStudent from "./CreateStudent";

const Student = () => {

  const [datas, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:500/')
    .then(res => setData(res.data))
    .catch(err => console.log('Error Occured:', err))
  }, [])

  const handleDelete = async (id) =>{
    try {
      await axios.delete('http://localhost:500/student/'+id)
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
   
  }

  return (
    <div className="d-flex vh-auto bg-primary justify-content-center align-items-center">
      <div className="w-auto vh-40 bg-white rounded text-center">
        <Link to="/create" className="btn btn-success"> + </Link>
        <table className="table">
          <thead>
            <tr className="w-auto">
              <th>Name</th>
              <th>Address</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>DOB</th>
              <th>Action</th>

            </tr>
          </thead>

          <tbody >
           {
                datas.map((data, i)=>(
                <tr key={i}>
               <td>{data.name}</td>
               <td>{data.address}</td>
               <td>{data.email}</td>
               <td>{data.phone}</td>
               <td>{data.DOB}</td>
               <td>
                <button onClick={()=>handleDelete(data.id)} className="btn btn-danger m-1">Delete</button>  
                <Link to={"/update"} className="btn btn-warning">Update</Link>

                </td>
             </tr>
                ))

            }
              
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
