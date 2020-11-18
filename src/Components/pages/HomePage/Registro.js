import React from 'react';
import '../../Registro.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
function table() {
    return (
        <>
            <div className='home__hero-section  darkBg' >
                <div className='container'>
                    <h1 className='bd-title'>Registro Empleados</h1>
                    <div class="bd-example">
                        <form>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Documento de indentidad</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Nombre</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Salario</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Tipo de empleado</label>
                                    <select id="inputState" class="form-control">
                                        <option selected="">Choose...</option>
                                        <option>Pastelero</option>
                                        <option>Decorador</option>

                                    </select>
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