import React from "react";
import Profile from "../Assects/defaultProfile.png";

const LawyerCard = () => {
  let Lawyer = [
    {
      title: "Advocate Ali rehman",
      PracticeArea: "Women Rights",
      Area: "Karachi"
    },
    {
      title: "Advocate Zafar Hussian",
      PracticeArea: "Child Labour",
      Area: "Lahore"
    },
    {
      title: "Advocate Babar Hans",
      PracticeArea: "Marriage Cases",
      Area: "Islamabad"
    },
    {
      title: "Advocate Abdul Karim",
      PracticeArea: "Divorce",
      Area: "Pindi"
    },
    {
      title: "Advocate Shayan",
      PracticeArea: "inheritance",
      Area: "khasmir"
    },
    {
      title: "Advocate Sameer Malik",
      PracticeArea: "Property Cases",
      Area: "Bahawalpur"
    }
  ];

  return (

    <>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
        {Lawyer.map((e)=>{
       return (
        <div class="col" style={{paddingBottom:"130px"}}>
        <div class="card">
          <img style={{ width: "50%" , margin: "auto"}} src={Profile} class="card-img-top" alt="..." />
          <div class="card-body" style={{margin:"auto", paddingLeft:"50px"}}>
          <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">
                      Practice Area : {e.PracticeArea}
                    </p>
            <p className="card-text">City: {e.Area}</p>
            <button style={{ backgroundColor: "#8951a0" }} className="text-light btn btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact me</button>
          </div>
        </div>
      </div>
     );})}  




        </div>




        {/* <div className="row">
        
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={Profile}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{Lawyer.title2}</h5>
                    <p className="card-text">
                      Practice Area : {Lawyer.PracticeArea2}
                    </p>
                    <p className="card-text">City: {Lawyer.Area2}</p>
                    <button style={{ backgroundColor: "#8951a0" }} className="text-light btn btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact me</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={Profile}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{Lawyer.title3}</h5>
                    <p className="card-text">
                      Practice Area : {Lawyer.PracticeArea3}
                    </p>
                    <p className="card-text">City: {Lawyer.Area3}</p>
                    <button style={{ backgroundColor: "#8951a0" }} className="btn text-light btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact me</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={Profile}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{Lawyer.title4}</h5>
                    <p className="card-text">
                      Practice Area : {Lawyer.PracticeArea4}
                    </p>
                    <p className="card-text">City: {Lawyer.Area4}</p>
                    <button style={{ backgroundColor: "#8951a0" }} className="btn text-light btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact me</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={Profile}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{Lawyer.title5}</h5>
                    <p className="card-text">
                      Practice Area : {Lawyer.PracticeArea5}
                    </p>
                    <p className="card-text">City: {Lawyer.Area5}</p>
                    <button style={{ backgroundColor: "#8951a0" }} className="btn text-light btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact me</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={Profile}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{Lawyer.title6}</h5>
                    <p className="card-text">
                      Practice Area : {Lawyer.PracticeArea6}
                    </p>
                    <p className="card-text">City: {Lawyer.Area6}</p>
                    <button style={{ backgroundColor: "#8951a0" }} className="btn text-light btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact me</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}


      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog .modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Let's Connect</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Name</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Email</label>
                  <input type="email" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Subject</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Message:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" style={{ backgroundColor: "#8951a0" }} className="btn text-light">Send message</button>
            </div>
          </div>
        </div>
      </div>

    </>



  );
};

export default LawyerCard;
