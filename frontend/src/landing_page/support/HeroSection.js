import React from "react";

function HeroSection() {
  return (
    <div style={{ backgroundColor: "#387ed1" }}>
      <div className="container">
        <div
          className="row"
          style={{ paddingTop: "6.9rem", paddingBottom: "3.5rem" }}
        >
          <div className="col-lg-10">
            <h4>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Student Portal
              </a>
            </h4>
          </div>
          <div className="col-lg-2">
            <h4>
              <a href="#" style={{ color: "white", fontSize: "14px" }}>
                Track tickets
              </a>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="col-lg-7 p-3">
              <h1
                className="fs-4"
                style={{ color: "white", paddingBottom: "2rem" }}
              >
                Search for an answer or browse help topics to create a ticket
              </h1>
              <input
                placeholder="Eg. how do I activate F&O"
                style={{ lineHeight: "3", width: "90%", borderRadius:"5px", border:"5px white" }}
              />
              <br />
              <a href="#" style={{ color: "white", lineHeight: "4" }}>
                Track account opening
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#" style={{ color: "white", lineHeight: "2" }}>
                Track segment activation
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#" style={{ color: "white", lineHeight: "2" }}>
                Intraday margins
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <a href="#" style={{ color: "white", lineHeight: "2" }}>
                Kite user manual
              </a>
            </div>
            <div className="col-5 p-5">
              <h1 className="fs-3" style={{ color: "white" }}>
                Featured
              </h1>
              <ol style={{ color: "white" }}>
                <li>
                  <a href="#" style={{ color: "white", lineHeight: "3" }}>
                    Current Takeovers and Delisting - January 2024
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white", lineHeight: "2.5" }}>
                    Latest Intraday leverages - MIS & CO
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
