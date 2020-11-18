import React from 'react';
import '../../Registro.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
function table() {
    return (
        <>
            <div className='home__hero-section  darkBg' >
                <div className='container'>
                    <h1 className='bd-title'>Registro de Pedidos o Ordenes</h1>
                    <div class="bd-example">
                        <form>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Codigo de Orden</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Nombre</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Peso Minimo</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Tipo de pastel</label>
                                    <select id="inputState" class="form-control">
                                        <option selected="">Choose...</option>
                                        <option>Cumpleaños</option>
                                        <option>Matrimonio</option>

                                    </select>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Fecha de solicitud</label>
                                    <input type="date" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Especificaciones</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                               
                            </div>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4" className=''>Codigo de cliente</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Codigo del empleado</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <Link to='/'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                       Registrar
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );


}
export default table;