import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  linkname1,
  linkname2,
  learnMore,
  googlePlay,
  appStore,
}) {
  function link1() {
    if (linkname1) {
      return <i class="fa fa-arrow-right" aria-hidden="true"></i>;
    }
  }
  function link2() {
    if (linkname2) {
      return <i class="fa fa-arrow-right" aria-hidden="true"></i>;
    }
  }
  return (
    <div className="container" style={{ marginTop: "7rem" }}>
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src={imageURL} alt="kite" style={{ width: "95%" }} />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 col-sm-12 mt-4 p-4">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo} className="me-5" style={{ textDecoration: "none" }}>
            {linkname1} {link1()}
          </a>
          <a
            href={learnMore}
            style={{ marginLeft: "50px", textDecoration: "none" }}
          >
            {linkname2} {link2()}
          </a>
          <br></br>
          <a href={googlePlay} style={{ zIndex: "1", textDecoration: "none" }}>
            <img
              src="Media\Images\googlePlayBadge.svg"
              alt="google play"
              style={{ marginTop: "2.6rem", width: "40%" }}
            />
          </a>
          <a href={appStore} style={{ textDecoration: "none" }}>
            <img
              src="Media\Images\appstoreBadge.svg"
              alt="app store"
              style={{ marginTop: "2.5rem", width: "40%", marginLeft: "50px" }}
            />
          </a>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}

export default LeftImage;
