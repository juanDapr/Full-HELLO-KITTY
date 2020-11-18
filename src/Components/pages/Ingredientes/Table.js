import React from 'react';
import '../../Table.css';

function table() {
    return (
        <>
            <div
                className='home__hero-section darkBg' >
                <div className='container'>
                    <h1 className= 'bd-title'>Ingredientes</h1>
                    <table className="table">
                        <thead>
                            <tr className="tr-light">
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </>

    );


}
export default table;