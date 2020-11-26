import React, { Component } from 'react';
import '../../Table.css';
import firebaseConf from '../../../Firebase';
import { Button } from '../../Button';

class table extends Component {
    constructor(){
        super();
        this.state={
            pedidos:[]
        };
    }
    componentWillMount(){
        this.getPedidos();
    }
    getPedidos(){
       const nameRef = firebaseConf.database().ref().child("pedido").once('value', function (snapshot){
           snapshot.forEach(function (childsnapshot){
            document.getElementById('tabla').innerHTML += ` <tr>
            <td>${childsnapshot.val().codOrden}</td>
            <td>${childsnapshot.val().nombre}</td>
            <td>${childsnapshot.val().peso}</td>
            <td>${childsnapshot.val().tipopastel}</td>
            <td>${childsnapshot.val().fechasolicitud}</td>
            <td>${childsnapshot.val().fechaentrega}</td>
            <td>${childsnapshot.val().especif}</td>
            <td>${childsnapshot.val().codCl}</td>
            <td>${childsnapshot.val().codEmp}</td>
            <td>${childsnapshot.val().domicilio}</td>
            </tr>`
           })
       })  
    }
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
                                    <th scope="col">Domicilio</th>
                                </tr>
                            </thead>
                            <tbody id="tabla">
                                
                            </tbody>
                        </table>
                    </div>
    
    
                </div>
            </>
    
        );
    
    }
    
}
export default table;