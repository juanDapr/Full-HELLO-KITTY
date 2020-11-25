import React, { Component } from 'react';
import '../../Table.css';

class table extends Component {
    render(){
        return (
            <>
                <div
                    className='home__hero-section' >
                    <div className='container'>
                        <h1 className= 'bd-title-dark'>Pedidos</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Código</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Peso (Kg)</th>
                                    <th scope="col">Tipo de pastel</th>
                                    <th scope="col">Fecha de solicitud</th>
                                    <th scope="col">Fecha de Entrega</th>
                                    <th scope="col">Especificaciones</th>
                                    <th scope="col">Codigo cliente</th>
                                    <th scope="col">Codigo empleado</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
    
    
                </div>
            </>
    
        );
    
    }
    
}
export default table;