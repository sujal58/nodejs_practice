import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:500/create', {name,address, phone, email, dob})
        .then(res =>{
            console.log(res);
              navigate("/");
        }).catch(err => console.log(err));
    }



  return (
        <div className="d-flex vh-auto bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3 m-5 ">
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center'>Add Student</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name..' className='form-control'
                        onChange={e => setName(e.target.value)}/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder='Enter Address..' className='form-control' 
                        onChange={e => setAddress(e.target.value)}/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder='Enter Phone..' className='form-control' 
                        onChange={e => setPhone(e.target.value)}/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control' 
                        onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">DOB</label>
                        <input type="date" placeholder='Enter DOB..' className='form-control' 
                        onChange={e => setDob(e.target.value)}/>
                    </div>
                    <button className='btn btn-success '>Submit</button>
                </form>
             </div>
        </div>
  )
}

export default CreateStudent