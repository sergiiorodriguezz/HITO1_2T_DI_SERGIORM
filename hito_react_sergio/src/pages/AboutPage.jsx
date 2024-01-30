import React from 'react'
import ordenadores from '../img/ordenador1.jpg'
import procesadores from '../img/proce1.jpg' 
import ram from '../img/ram1.jpg'
import monitores from '../img/monitor1.jpg'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">SOBRE NOSOTROS</h1>
        <hr />
        <p className="lead text-center">
        PcComponentes es un comercio electrónico español de tecnología, especializado en productos informáticos, electrónicos y electrodomésticos, propiedad de la sociedad PcComponentes y Multimedia SLU. En la actualidad pertenece al grupo YF Networks y opera en España, Francia, Italia y Portugal.
        </p>

        <h3 className="text-center py-4">NUESTRO PRODUCTOS</h3>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={ordenadores} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">ORDENADORES</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={procesadores} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">PROCESADORES</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={ram} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">RAM</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={monitores} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">MONITORES</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage