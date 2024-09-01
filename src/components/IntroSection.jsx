import React from 'react';
import IntroBox from './IntroBox';
import { intro } from '../constants'; 

const IntroSection = () => {
  return (
    <div>
      {intro.map((item, index) => (
        <IntroBox
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          right={item.right}
        />
      ))}
    </div>
  );
};

export default IntroSection;
