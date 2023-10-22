import {useState} from 'react'
import { registerUser,getUser } from '../../features/authSlice'
import {useDispatch} from "react-redux"
import ReadData from '../Read Data/ReadData'

const Form = () => {
    const [users, setUsers]= useState({})
    const dispatch=useDispatch();

    const handleData=(e)=>{
       setUsers({...users, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(users))
          .then(() => {
            dispatch(getUser());
          });
      };
    
    return (
        <>
       
            <div className="container ">
                <div className="row d-flex text-start justify-content-center mt-5">
                    
                    <div className="col-xxl-6 border shadow-lg p-4 bg-light">
                        <h2 className='text-center fw-bold display-4 my-5 mt-5'>Enter Your Details</h2>

                        {/* Form Tag */}
                        <form className='my-4' onSubmit={handleSubmit}>

                                 {/* Name Input Field */}
                        <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Enter your Name</label>
                                <input type="text" onChange={handleData} class="form-control p-3" name="name" id="exampleInputPassword1"/>
                            </div>

                                 {/* Email Input Field */}
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" name="email" onChange={handleData} class="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>

                                 {/* Password Input Field */}
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" name="password" onChange={handleData} class="form-control p-3" id="exampleInputPassword1"/>
                            </div>


                            
                            

                            {/* Form Submit Button */}
                            <button type="submit" class="btn btn-primary my-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>


            <ReadData/>
        </>
    )
}

export default Form
