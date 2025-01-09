import React from "react";

function Team() {
  return (
    <div className="container " style={{marginTop: "7rem"}}>
      <h2 className="text-center">People</h2>
      <div className="row">
        <div className="col-lg-1 col-sm-0"></div>
        <div className="col-lg-3 col-sm-12 text-center" style={{marginTop:"4rem", marginLeft: "1rem"}}>
          <img
            src="Media\Images\nithinKamath.jpg"
            alt="nitin"
            style={{
              height: "295px",
              marginBottom: "10px",
              borderRadius: "100%",
            }}
          />
          <div className="text-center mt-3" style={{marginLeft:"1.3rem", opacity: "0.9"}}>
          <h5 className="text-center mb-3" style={{fontSize:"1.25rem"}}>Nitin kamnath</h5>
          <p className="text-center">Founder, CEO</p>
          </div>
        </div>
        <div className="col-lg-1 col-sm-0"></div>
        <div className="col-lg-6 col-sm-12" style={{lineHeight: "1.8", marginBottom: "15px", color: "#424242", fontSize: "1.09rem", marginTop: "5rem"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.</p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              HomePage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            /{" "}
            <a
              href="https://x.com/UmangPa6179006"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>
        <div className="col-lg-1 col-sm-0"></div>
      </div>
    </div>
  );
}

export default Team;
