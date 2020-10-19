import React from 'react';

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  const proBar = document.getElementById('progressBar1');
  return (
    <div>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
