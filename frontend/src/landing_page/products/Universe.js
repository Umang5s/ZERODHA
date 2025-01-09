import React from "react";

function Universe() {
  return (
    <div className="container" style={{ marginTop: "7rem" }}>
      <div className="row">
        <h5
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "400",
          }}
        >
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </h5>
      </div>
      <div className="row mt-5">
        <h2
          style={{
            fontSize: "2rem",
            lineHeight: "1.5",
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          The Zerodha Universe
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "15px",
          }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "40px",
          marginLeft:"35px",
          textAlign: "center",
          flexFlow: "row",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#9b9b9b",
            fontSize: "0.75rem",
          }}
        >
          <img
            src="Media\Images\smallcaseLogo.png"
            style={{ height: "55px" }}
          />
          <br />
          <span class="text-12 text-light-gray">
          Thematic investing platform <br/>
          that helps you invest in diversified <br/>
          baskets of stocks on ETFs.
          </span>
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#9b9b9b",
            fontSize: "0.75rem",
            marginLeft:"60px"
          }}
        >
          <img src="Media\Images\streakLogo.png" style={{ height: "55px" }} />
          <br />
          <span class="text-12 text-light-grey">
            Systematic trading platform <br/>
            that allows you to create and backtest <br/>
            strategies without coding.
            </span>
        </a>
        <a
          href="https://sensibull.com/"
          style={{
            textDecoration: "none",
            color: "#9b9b9b",
            fontSize: "0.75rem",
          }}
        >
          <img
            src="Media\Images\sensibullLogo.svg"
            style={{ height: "55px" }}
          />
          <br />
          <span class="text-12 text-light-grey sensibull-desc">
            Options trading platform that lets you <br/>
            create strategies, analyze positions, and examine <br/>
            data points like open interest, FII/DII, and more.
            </span>
        </a>
      </div>
      <div
        className="col text-center mt-5 mb-5"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "40px",
          flexFlow: "row",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://www.zerodhafundhouse.com/"
          style={{
            textDecoration: "none",
            color: "#9b9b9b",
            fontSize: "0.75rem",
          }}
        >
          <img
            src="Media\Images\zerodhaFundhouse.png"
            style={{ height: "55px" }}
          />
          <br />
          <span class="text-12 text-light-grey">
            Our asset management venture <br/>
            that is creating simple and transparent index <br/>
            funds to help you save for your goals.
            </span>
        </a>
        <a
          href="https://www.tijorifinance.com/features/"
          style={{
            textDecoration: "none",
            color: "#9b9b9b",
            fontSize: "0.75rem",
          }}
        >
          <img
            src="https://zerodha.com/static/images/partners/tijori.svg"
            style={{ height: "55px" }}
          />
          <br />
          <span class="text-12 text-light-grey">
            Investment research platform <br/>
          that offers detailed insights on stocks, <br/>
          sectors, supply chains, and more.
          </span>
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#9b9b9b",
            fontSize: "0.75rem",
          }}
        >
          <img src="Media\Images\dittoLogo.png" style={{ height: "55px" }} />
          <br />
          <span class="text-12 text-light-grey">
            Investment research platform <br/>
            that offers detailed insights on stocks, <br/>
            sectors, supply chains, and more.
            </span>
        </a>
      </div>
      <div className="row pt-4">
      <button
          className="p-2 btn btn-primary fs-5 mb-5 but"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
