import React, { Component } from 'react';
import '../../Registro.css';
import { Button } from '../../Button';
import firebaseConf from '../../../Firebase';

class table extends Component {
    constructor(){
        super();
        this.state={
            empleados:[]
        };
    }
    // Mostrar una alerta cuando se envia el formulario
    
    resetForm() {
        this.refs.registroEmp.reset();
      }
    // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();
    
    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      documento: this.documento.value,
      nombre: this.nombre.value,
      salario: this.salario.value,
      tipoemp: this.tipoemp.value
    };
    
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.documento && params.nombre && params.salario && params.tipoemp) {
      // enviamos nuestro objeto "params" a firebase database
      firebaseConf.database().ref('empleado').push(params).then(() => {
      }).catch(() => {
       
      });
      // limpiamos nuestro formulario llamando la funcion resetform
      this.resetForm();
    } else {
    };
  }

    render(){
        return (
            <>
                <div className='home__hero-section  darkBg' >
                    <div className='container'>
                        <h1 className='bd-title'>Registro Empleados</h1>
                        <div class="bd-example">
                            <form id="registroEmpleado"  onSubmit={this.sendMessage.bind(this)} ref="registroEmp">
                                <div className='form-row'>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Documento de indentidad</label>
                                        <input type="number" className="form-control" id="documento" ref={documento => this.documento = documento}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" ref={nombre => this.nombre = nombre}/>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Salario</label>
                                        <input type="number" className="form-control" id="salario" ref={salario => this.salario = salario}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Tipo de empleado</label>
                                        <select id="tipoemp" className="form-control" ref={tipoemp => this.tipoemp = tipoemp}>
                                            <option selected="">Choose...</option>
                                            <option>Pastelero</option>
                                            <option>Decorador</option>
    
                                        </select>
                                    </div>
                                        <Button  type="submit" buttonSize='btn--wide' buttonColor='blue'>
                                           Registrar
                                        </Button>
                                </div>
    
                            </form>
                        </div>
                    </div>
                </div>
            </>
    
        );
    
    }

}
export default table;