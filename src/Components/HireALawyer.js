import React from 'react'
import LawyerCard from './LawyerCard'


const HireALawyer = () => {
  return (
    <div>
      <div className='container-fluid text-center text-light' style={{marginTop: "0px" , padding: "40px", backgroundColor:"black"}}>
           <h1>List of Available Lawyers</h1>
      </div>
      <div className='container-fluid ' style={{marginTop: "0px" , paddingTop:"30px" , backgroundColor:"#98caf8"}}>
     <div>
       <LawyerCard/>  
     </div>
      </div>
    </div>
  )
}

export default HireALawyer
