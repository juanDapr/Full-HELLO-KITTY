import React, { Component } from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import Table from './Table'
import Registro from './Registro'

class Products extends Component {
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

export default Products;