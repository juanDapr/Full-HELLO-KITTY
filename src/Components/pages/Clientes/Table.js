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
       const nameRef = firebaseConf.database().ref("cliente")
       nameRef.once("value", (snapshot) =>{
           this.setState({
               clientes: snapshot.val()
           })
           console.log(this.state)
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
                            <tbody>
                               {this.state.clientes.map((cliente)=>{
                                   return(
                                       <tr>
                                           <td>{cliente.tipocliente}</td>
                                           <td>{cliente.tipodoc}</td>
                                           <td>{cliente.numdoc}</td>
                                           <td>{cliente.nombre}</td>
                                           <td>{cliente.direccion}</td>
                                       </tr>
                                   )
                               })}
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