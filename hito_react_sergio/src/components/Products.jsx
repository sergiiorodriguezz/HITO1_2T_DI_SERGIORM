import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import ordenador1 from '../img/ordenador1.jpg';
import ordenador2 from '../img/ordenador2.jpg';
import ordenador3 from '../img/ordenador3.jpg';
import ordenador4 from '../img/ordenador4.jpg';
import ordenador5 from '../img/ordenador5.jpg';
import ordenador6 from '../img/ordenador6.jpg';
import ordenador7 from '../img/odenador7.jpg';
import ordenador8 from '../img/ordenador8.jpg';
import proce1 from '../img/proce1.jpg';
import ram1 from '../img/ram1.jpg';
import raton1 from '../img/raton1.jpg';

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const products = await response.json();
        // Asigna imágenes a cada producto
        const productsWithImages = products.map((product, index) => {
          switch (index) {
            case 0:
              return { ...product, image: ordenador1 };
            case 1:
              return { ...product, image: ordenador2 };
            case 2:
              return { ...product, image: ordenador3 };
            case 3:
              return { ...product, image: ordenador4 };
            case 4:
              return { ...product, image: ordenador5 };
            case 5:
              return { ...product, image: ordenador6 };
            case 6:
              return { ...product, image: ordenador7 };
            case 7:
              return { ...product, image: ordenador8 };
            case 8:
              return { ...product, image: proce1 };
            case 9:
              return { ...product, image: ram1 };
            case 10:
              return { ...product, image: raton1 };
            case 11:
              return { ...product, image: ordenador5 };
            case 12:
              return { ...product, image: ordenador6 };
            case 13:
              return { ...product, image: ordenador8 };
            case 14:
              return { ...product, image: raton1 };
            case 15:
              return { ...product, image: ordenador1 };
            case 16:
              return { ...product, image: ordenador2 };
            case 17:
              return { ...product, image: ordenador3 };
            case 18:
              return { ...product, image: ordenador4 };
            case 19:
                return { ...product, image: proce1 };
            default:
              return product;
          }
        });
        setData(productsWithImages);
        setFilter(productsWithImages);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">Precio por definir</li>
                  {}
                </ul>
                <div className="card-body">
                  <Link to={""} className="btn btn-dark m-1">
                    Comprar ahora
                  </Link>
                  <button className="btn btn-dark m-1">
                    Añadir a cesta
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">OFERTAS EN ORDENADORES</h2>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
