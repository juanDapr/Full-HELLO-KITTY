
import React, { Component } from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne} from './Data';

import Table from './Table'
import Registro from './Registro'
import App from '../../../App';
class Home extends Component {
  render(){
    return (
      <>
        <HeroSection {...homeObjOne} />
        <Table></Table>
        <Registro />
        
      </>
    );
  }
 
}

export default Home;