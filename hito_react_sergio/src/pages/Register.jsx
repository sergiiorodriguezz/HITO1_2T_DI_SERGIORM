import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">REGISTRATE</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Nombre completo</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Nombre Completo aquí"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="nombre@ejemplo.com"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Contraseña</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="my-3">
                                <p>Si tiene cuenta pulsa aquí para iniciar sesión <Link to="/login" className="text-decoration-underline text-info">Inicia sesión</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                    Registrarse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register