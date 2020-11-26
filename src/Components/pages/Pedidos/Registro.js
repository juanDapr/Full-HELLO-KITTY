import React, { Component } from 'react';
import '../../Registro.css';
import { Button } from '../../Button';
import firebaseConf from '../../../Firebase';
import swalert from 'sweetalert2'

class table extends Component {
    constructor(){
        super();
        this.state={
            pedidos:[],
            fecha: new Date(Date.now())
        };
    }
    getCurrentDate(separator='-'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }
    resetForm() {
        this.refs.registroPed.reset();
      }
    // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();
    if (this.domicilio.checked) {
        this.domicilio.value="✔"
    } else {
        this.domicilio.value="✘"
    }
    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      codOrden: this.codOrden.value,
      nombre: this.nombre.value,
      peso: this.peso.value,
      tipopastel: this.tipopastel.value,
      fechasolicitud: this.getCurrentDate(),
      fechaentrega: this.fechaentrega.value,
      codCl:this.codCl.value,
      codEmp:this.codEmp.value,
      domicilio:this.domicilio.value,
      especif:this.especif.value
    };
    
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.codOrden && params.nombre && params.tipopastel && params.fechaentrega && params.codCl && params.codEmp) {
        // enviamos nuestro objeto "params" a firebase database
        firebaseConf.database().ref('pedido').push(params).then(() => {
            swalert.fire({
                title: 'Pedido registrado',
                text: 'Orden registrada exitosamente',
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
                        <h1 className='bd-title'>Registro de Pedidos o Ordenes</h1>
                        <div class="bd-example">
                            <form id="registroPedido"  onSubmit={this.sendMessage.bind(this)} ref="registroPed">
                                <div className='form-row'>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Codigo de Orden</label>
                                        <input type="number" className="form-control" id="codOrden" ref={codOrden => this.codOrden = codOrden}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Nombre</label>
                                        <input type="text" class="form-control" id="nombre" ref={nombre => this.nombre = nombre}/>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Peso Minimo</label>
                                        <input type="number" class="form-control" id="peso" ref={peso => this.peso = peso} />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Tipo de pastel</label>
                                        <select id="tipopastel" class="form-control" ref={tipopastel => this.tipopastel = tipopastel}>
                                            <option selected="">Choose...</option>
                                            <option>Cumpleaños</option>
                                            <option>Matrimonio</option>
                                            <option>Bautizo</option>
                                            <option>Despedida de soltera</option>
                                            <option>Despedida de soltero</option>
                                            <option>Primera comunión</option>
                                            <option>Otro</option>
    
                                        </select>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Fecha de entrega</label>
                                        <input type="date" class="form-control" id="fechaentrega" ref={fechaentrega => this.fechaentrega = fechaentrega}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Especificaciones</label>
                                        <input type="text" class="form-control" id="especif" ref={especif => this.especif = especif}/>
                                    </div>
                                   
                                </div>
                                <div className='form-row'>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4" className=''>Codigo de cliente</label>
                                        <input type="number" class="form-control" id="codCl" ref={codCl => this.codCl = codCl}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Codigo del empleado</label>
                                        <input type="number" class="form-control" id="codEmp" ref={codEmp => this.codEmp = codEmp} />
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div class="form-group col-md-6">
                                        <input
                                        name="domicilio"
                                        type="checkbox"
                                        id="domicilio" ref={domicilio => this.domicilio = domicilio}
                                        />
                                        <label>
                                            Pedir a domicilio
                                        </label>
                                    </div>
                                </div>
                                <Button type="submit" buttonSize='btn--wide' buttonColor='blue'>
                                           Registrar
                                        </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
    
        );
    }


}
export default table;