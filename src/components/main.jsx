import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png"
            alt="Card"
            height={500}
            style={{ opacity: 0.4 }}  // Adjust opacity here
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h1 className="card-title fs-1 text fw-bold" style={{ color: "white" }}>
                India's best shopping store
              </h1>
              <p className="card-text fs-5 d-none d-sm-block" style={{ color: "white"}}>
                We offer a premium range of clothes for men and women to choose from. And let’s not forget accessories and electronics!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
