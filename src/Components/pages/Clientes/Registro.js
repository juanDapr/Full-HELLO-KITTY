import React from 'react';
import '../../Registro.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
function table() {
    return (
        <>
            <div className='home__hero-section  darkBg' >
                <div className='container'>
                    <h1 className='bd-title'>Registro Clientes</h1>
                    <div class="bd-example">
                        <form>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Numero de indentificacion</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Nombre de la persona o Empresa </label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Direccion</label>
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