import React from 'react'

function LegalServices(props) {
  return (
    <div>
      <div style={{backgroundColor: "#98caf8", height: "auto" , marginTop: "0", paddingBottom:"250px"}} className="container-fluid">
            <div style={{backgroundColor: "" , height: "auto", marginTop:"0", padding:"50px"}} className='container'>
             <div style={{justifyContent: "center", paddingBottom: "30px"}} className='d-flex'>
                 <img style={{borderRadius: "10%"}} src={props.image} alt="" srcset="" />
             </div>
           {/* <h1 className='text-center' style={{marginBottom:"30px", fontWeight:"700"}}>{props.title}</h1> */}
           <h1 className='text-center' style={{marginBottom:"30px"}}>Frequently Asked Questions</h1>
           <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {props.details.Q1}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>{props.details.A1}</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      {props.details.Q2}
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>{props.details.A2}</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      {props.details.Q3}
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>{props.details.A3}</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      {props.details.Q4}
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>{props.details.A4}</p>
      </div>
    </div>
  </div>


</div>
            </div>
      </div>
    </div>
  ) 
}

export default LegalServices
