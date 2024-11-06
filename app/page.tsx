// /pages/coming-soon.tsx
import React from 'react';

const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Coming Soon</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(45deg, #000000, #434343)', // Black and gray gradient
    margin: 0,
  },
  heading: {
    fontSize: '60px',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    textAlign: 'center',
  },
};

export default ComingSoon;
