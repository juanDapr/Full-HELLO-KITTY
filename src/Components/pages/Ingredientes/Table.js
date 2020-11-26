import React, { Component } from 'react';
import '../../Table.css';
import firebaseConf from '../../../Firebase';

class table extends Component {
    constructor(){
        super();
        this.state={
            ingredientes:[]
        };
    }
    componentWillMount(){
        this.getPedidos();
    }
    getPedidos(){
       const nameRef = firebaseConf.database().ref().child("ingrediente").once('value', function (snapshot){
           snapshot.forEach(function (childsnapshot){
            document.getElementById('tabla').innerHTML += ` <tr>
            <td>${childsnapshot.val().nombre}</td>
            <td>${childsnapshot.val().unMedida}</td>
            <td>${childsnapshot.val().cantidad}</td>
            <td>${childsnapshot.val().codPastel}</td>
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
                        <h1 className= 'bd-title-dark'>Ingredientes</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Unidad de medida</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Codigo pastel</th>
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