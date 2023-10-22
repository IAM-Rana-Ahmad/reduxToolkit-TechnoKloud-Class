// In this component we just get the state in our slice using useSelector hook and apply map on it to getting the values from the api


import React from 'react'
import {useSelector} from "react-redux"

const ReadData = () => {
    const data= useSelector(state=>state.app.data)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                   {data.map((values)=>(
                     <div className="col-xxl-3" key={values.id}>
                     <div className="card" style={{width:"18rem"}}>
                         <div className="card-body">
                             <h5 className="card-title">{values.name}</h5>
                             <h6 className="card-subtitle mb-2 text-body-secondary">{values.email}</h6>
                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             
                         </div>
                     </div>
                 </div>
                   ))}
                </div>
            </div>
        </>
    )
}

export default ReadData
