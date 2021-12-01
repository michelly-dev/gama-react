import React from 'react';
import Lottie from "react-lottie";
import animation from "../../animations/66433-loader.json";

import { Container } from './style';

const Loader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation
  }
  return (
    <Container>
      <div>
        <h1>Carregando...</h1>
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />
      </div>
    </Container>
  );
}

export default Loader;