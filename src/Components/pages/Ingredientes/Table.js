import React, { Component } from 'react';
import '../../Table.css';

class table extends Component {
    render(){
        return (
            <>
                <div
                    className='home__hero-section darkBg' >
                    <div className='container'>
                        <h1 className= 'bd-title'>Ingredientes</h1>
                        <table className="table">
                            <thead>
                                <tr className="tr-light">
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Unidad de medida</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Codigo pastel</th>
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