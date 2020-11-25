import React, { Component } from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import Table from './Table'
import Registro from './Registro'
import { render } from '@testing-library/react';

class Pedidos extends Component{
  render(){
    return (
      <>
        <HeroSection {...homeObjOne} />
        <Table></Table>
        <Registro></Registro>
      </>
    );
  }
  
}

export default Pedidos;