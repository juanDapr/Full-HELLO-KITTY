import React, { Component } from 'react';
import '../../Table.css';
import firebaseConf from '../../../Firebase';

class table extends Component{
    constructor(){
        super();
        this.state={
            empleados:[]
        };
        this.getEmpleados = this.getEmpleados.bind(this)
    }
    componentWillMount(){
        this.getEmpleados();
    }
    getEmpleados(){
       const nameRef = firebaseConf.database().ref("empleado")
       nameRef.once("value", (snapshot) =>{
           this.setState({
               empleados: snapshot.val()
           })
           console.log(this.state)
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