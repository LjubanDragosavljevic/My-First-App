import React from 'react';
import './styles.css';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Filler />
    </div>
  );
};
const Filler = (props) => {
  return <div classname="filler"></div>;
};

const PrBar = document.getElementById('progressBar1');

export default ProgressBar;
