import React from 'react';

import { Container } from './style';
import NavBar from '../../components/Nav';
import Footer from '../../components/Footer';


const Courses: React.FC = () => {

  return (
    <>
      <NavBar />
      <Container>
        <div>Courses</div>
      </Container>
      <Footer />
    </>
  );
}

export default Courses;