import React from "react";
import black from '../img/blackfriday.png'

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={black}
            alt="Card"
            height={1000}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
