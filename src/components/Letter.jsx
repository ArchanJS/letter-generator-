import React from "react";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import "./Letter.css";

const Letter = () => {
  const {
    company,
    letterType,
    username,
    address,
    logo,
    refNo,
    designation,
    joiningDate,
  } = useLocation().state;
  console.log(company, letterType, username, address, logo);

  const generatePDF = () => {
    const doc = new jsPDF("p", "pt");
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = dd + "-" + mm + "-" + yyyy;
    let pname = username.split(" ").join('-');
    let filename = pname+'-'+today
      doc.html(document.getElementById("pdf-div"), {
        callback: function (pdf) {
          pdf.save(`${filename}.pdf`);
        },
      });
  };

  return (
    <div
      style={{
        minHeight: "92.5vh",
        minWidth: "100vw",
        backgroundColor: "#00c0d9",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/gray-floral.png")`,
      }}
    >
      <div className="container">
        <div className="row">

        <h1 className='heading text-center' style={{color:'#24134d' }}>Preview</h1>


          <div className="col-lg-8 col-md-8 col-sm-12 col-12" id="pdf-div" style={{backgroundColor:'white'}}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-row mt-2">
              <img
                src={logo}
                alt=""
                className="col-lg-2 col-md-2 col-sm-4 col-4 ms-3"
              />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column mt-4 ms-3">
              <h5>{username}</h5>
              <h6>{address}</h6>
              <h6>Ref No: {refNo}</h6>
              <h6>Designation: {designation}</h6>
              <h6>Joining Date: {joiningDate}</h6>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column mt-2 text-center">
              <h6 className="me-5">Subject: {letterType}</h6>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center px-5">
              <p className="me-5" style={{ fontSize: "14px" }}>
                {company} Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Optio mollitia eaque quas explicabo distinctio sunt
                aperiam esse, quaerat alias at, perferendis asperiores pariatur,
                maiores iusto earum cumque et! Laudantium at quisquam illo
                architecto beatae ut facere ex minus. Voluptates ipsum quia
                praesentium aperiam ducimus! Praesentium accusamus voluptates
                itaque minus voluptatibus consequuntur ipsum voluptas repellat,
                corrupti est non facere ea nemo debitis laborum dicta, incidunt
                nesciunt repudiandae. Cupiditate aperiam nam veniam blanditiis
                voluptatibus quae accusamus reprehenderit laudantium! Esse,
                quia. Voluptatem rerum omnis recusandae repellendus in.
                Consequuntur molestiae libero quas, veritatis, modi, perferendis
                hic a error velit aliquid aut! Beatae, amet sint?
              </p>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column mt-4 ms-3">
              <h4>Random text</h4>
              <h6>Some random texts</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center text-center">
            <button
              className="btn btn-primary mb-2 mt-1 mybtn"
              onClick={generatePDF}
            >
              Generate PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
