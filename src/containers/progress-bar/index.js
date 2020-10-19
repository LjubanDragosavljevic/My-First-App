import React from 'react';

let i = 0;
return function Move() {
  if (i === 0) {
    i = 1;
    let elem = document.getElementById('myBar');
    let width = 10;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width + '%';
      }
    }
  }
};

export default Move;
