import React from 'react';
import './Modul.scss';


const Modul = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modul;