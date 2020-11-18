import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne} from './Data';

import Table from './Table'
import Registro from './Registro'
function Services() {
  return (
    <>
      
      <HeroSection {...homeObjOne} />
      <Table ></Table>
      <Registro></Registro>
    </>
  );
}

export default Services;