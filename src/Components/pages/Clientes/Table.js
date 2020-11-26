import React, { Component } from 'react';
import '../../Table.css';
import firebaseConf from '../../../Firebase';


class table extends Component{
    constructor(){
        super();
        this.state={
            clientes:[]
        };
        this.getClientes = this.getClientes.bind(this)
    }
    componentWillMount(){
        this.getClientes();
    }
    getClientes(){
       const nameRef = firebaseConf.database().ref().child("cliente").once('value', function (snapshot){
           snapshot.forEach(function (childsnapshot){
            document.getElementById('tabla').innerHTML += ` <tr>
            <td>${childsnapshot.val().tipocliente}</td>
            <td>${childsnapshot.val().tipodoc}</td>
            <td>${childsnapshot.val().numdoc}</td>
            <td>${childsnapshot.val().nombre}</td>
            <td>${childsnapshot.val().direccion}</td>
            </tr>
            `
           })
       })
       
    }
    render(){
        return (
            <React.Fragment>
<>
                <div
                    className='home__hero-section' >
                    <div className='container'>
                        <h1 className= 'bd-title-dark'>Clientes</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tipo de Cliente</th>
                                    <th scope="col">Tipo Documento</th>
                                    <th scope="col">Num Documento</th>
                                    <th scope="col">Nombre/Razón Social</th>
                                    <th scope="col">Direccion</th>
                                </tr>
                            </thead>
                            <tbody id="tabla">
                               
                            </tbody>
                        </table>
                    </div>
    
    
                </div>
            </>
            </React.Fragment>
    
        );
    }
    
}
export default table;