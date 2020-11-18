import React from 'react';
import '../../Registro.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
function table() {
    return (
        <>
            <div className='home__hero-section  ' >
                <div className='container'>
                    <h1 className='bd-title-dark'>Registro Ingredientes</h1>
                    <div class="bd-example">
                        <form>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4 " className='rosa'>Nombre:</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4" className='rosa'>Unidad</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4" className='rosa'>Codigo del pastel</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                              
                                
                            </div>
                            <Link to='/'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                       Registrar
                                    </Button>
                                </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );


}
export default table;