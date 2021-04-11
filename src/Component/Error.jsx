import React, { useEffect } from 'react';
import './Error.css';
import gsap from 'gsap';

function Error() {
  useEffect(() => {
    gsap.from('.main-text', {
      y: '130%',
      ease: 'Power4.out',
      duration: 1.2,
      skewY: -7,
      opacity: 0,
    });
  }, []);

  return (
    <section>
      <h1 className="main-text">
        Error <span className="error">404 </span>
      </h1>
      <h3>Ooops, looked like we didn't found What you've looking for</h3>
    </section>
  );
}

export default Error;
