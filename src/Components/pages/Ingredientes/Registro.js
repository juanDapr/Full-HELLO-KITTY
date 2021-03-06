import React, { Component } from 'react';
import '../../Registro.css';
import { Button } from '../../Button';
import firebaseConf from '../../../Firebase';
import swalert from 'sweetalert2'

class table extends Component {
    constructor(){
        super();
        this.state={
            ingredientes:[]
        };
    }
    // Mostrar una alerta cuando se envia el formulario
    
    resetForm() {
        this.refs.registroIng.reset();
      }
    // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();
    
    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      nombre: this.nombre.value,
      unMedida: this.unMedida.value,
      cantidad: this.cantidad.value,
      codPastel: this.codPastel.value
    };
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.nombre && params.unMedida && params.cantidad && params.codPastel) {
            // enviamos nuestro objeto "params" a firebase database
            firebaseConf.database().ref('ingrediente').push(params).then(() => {
                swalert.fire({
                    title: 'Ingrediente registrado',
                    text: 'Ingrediente registrado exitosamente',
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
                        <h1 className='bd-title'>Registro Ingredientes</h1>
                        <div class="bd-example">
                            <form  id="registroIngrediente"  onSubmit={this.sendMessage.bind(this)} ref="registroIng">
                                <div className='form-row'>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4 ">Nombre:</label>
                                        <input type="text" className="form-control" id="nombre" ref={nombre => this.nombre = nombre}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Unidad de medida</label>
                                        <select id="unMedida" className="form-control" ref={unMedida => this.unMedida = unMedida}>
                                            <option selected="">Choose...</option>
                                            <option>Kg</option>
                                            <option>gr</option>
                                            <option>L</option>
                                            <option>ml</option>
                                            <option>C/da</option>
                                            <option>C/dita</option>
                                            <option>Pizca</option>
                                            <option>Unidad</option>
    
                                        </select>
                                    </div>
                                </div>
                                <div className='form-row'>
                                <div className="form-group col-md-6">
                                        <label for="inputEmail4">Cantidad</label>
                                        <input type="number" className="form-control" id="cantidad" ref={cantidad => this.cantidad = cantidad} />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Codigo del pastel</label>
                                        <input type="number" class="form-control" id="codPastel" ref={codPastel => this.codPastel = codPastel}/>
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