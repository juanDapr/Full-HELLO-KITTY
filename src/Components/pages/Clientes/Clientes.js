import React, { Component } from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne} from './Data';
import firebase from 'firebase';

import Table from './Table'
import Registro from './Registro'
class Services extends Component{
 
  render(){
    return (
      <>
      <HeroSection {...homeObjOne} />
      <Table ></Table>
      <Registro></Registro>
      </>
    );
  }
  
}

export default Services;