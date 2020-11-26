import React, { Component } from 'react';
import '../../Table.css';
import firebaseConf from '../../../Firebase';

class table extends Component{
    constructor(){
        super();
        this.state={
            empleados:[]
        };
    }
    componentWillMount(){
        this.getPedidos();
    }
    getPedidos(){
       const nameRef = firebaseConf.database().ref().child("empleado").once('value', function (snapshot){
           snapshot.forEach(function (childsnapshot){
            document.getElementById('tabla').innerHTML += ` <tr>
            <td>${childsnapshot.val().documento}</td>
            <td>${childsnapshot.val().nombre}</td>
            <td>${childsnapshot.val().salario}</td>
            <td>${childsnapshot.val().tipoemp}</td>
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
                        <h1 className= 'bd-title-dark'>Empleados</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Codigo</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Salario</th>
                                    <th scope="col">Cargo</th>
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