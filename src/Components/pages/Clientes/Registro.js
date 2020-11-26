import React, { Component } from 'react';
import '../../Registro.css';
import { Button } from '../../Button';
import firebaseConf from '../../../Firebase';
import swalert from 'sweetalert2'

class table extends Component {
    constructor(){
        super();
        this.state={
            clientes:[]
        };
    }
    // Mostrar una alerta cuando se envia el formulario
    
    resetForm() {
        this.refs.registroCl.reset();
      }
    // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();
    
    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      tipocliente: this.tipocliente.value,
      tipodoc: this.tipodoc.value,
      numdoc: this.numdoc.value,
      nombre: this.nombre.value,
      direccion: this.direccion.value
    };
    
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.tipocliente && params.tipodoc && params.numdoc && params.nombre && params.direccion) {
      // enviamos nuestro objeto "params" a firebase database
      firebaseConf.database().ref('cliente').push(params).then(() => {
        swalert.fire({
            title: 'Cliente registrado',
            text: 'Cliente registrado exitosamente',
            icon: 'success',
            confirmButtonColor: '#f00946',
            confirmButtonText: 'Aceptar'
        })
    }).catch(() => {
        swalert.fire({
            title: 'Error',
            text: 'Los datos no se lograron guardar',
            icon: 'error',
            confirmButtonColor: '#f00946',
            confirmButtonText: 'Aceptar'
        })
    });

// limpiamos nuestro formulario llamando la funcion resetform
this.resetForm();
} else {
swalert.fire({
    title: 'Error',
    text: 'Por favor ingrese todos los datos',
    icon: 'warning',
    confirmButtonColor: '#f00946',
    confirmButtonText: 'Aceptar'
})
    };
  }

    render(){
        return (
            <>
                <div className='home__hero-section  darkBg' >
                    <div className='container'>
                        <h1 className='bd-title'>Registro Clientes</h1>
                        <div class="bd-example">
                            <form id="registroCliente"  onSubmit={this.sendMessage.bind(this)} ref="registroCl">
                                <div className='form-row'>
                                <div className="form-group col-md-6">
                                        <label for="inputEmail4">Tipo de Cliente</label>
                                        <select id="tipocliente" className="form-control" ref={tipocliente => this.tipocliente = tipocliente}>
                                            <option selected="">Choose...</option>
                                            <option>Empleado</option>
                                            <option>Empresa</option>
                                            <option>Persona natural</option>
                                        </select>
                                    </div>
                                <div className="form-group col-md-6">
                                        <label for="inputEmail4">Tipo de documento</label>
                                        <select id="tipodoc" className="form-control" ref={tipodoc => this.tipodoc = tipodoc}>
                                            <option selected="">Choose...</option>
                                            <option>NIT</option>
                                            <option>CC</option>
                                            <option>TI</option>
                                            <option>CE</option>
                                            <option>Pasaporte</option>
    
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Numero de indentificacion</label>
                                        <input type="number" className="form-control" id="numdoc" ref={numdoc => this.numdoc = numdoc}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Nombre de la persona o Empresa </label>
                                        <input type="text" className="form-control" id="nombre" ref={nombre => this.nombre = nombre}/>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Direccion</label>
                                        <input type="text" className="form-control" id="direccion" ref={direccion => this.direccion = direccion} />
                                    </div>
    
    
                                </div>
                                    <Button type="submit" buttonSize='btn--wide' buttonColor='blue'>Registrar</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
    
        );
    }


}
export default table;