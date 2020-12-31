import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const SuccessMessage = () => {
  const { state: routerState } = useLocation();

  return routerState
    ? <h4 className="success-message">{routerState.successMessage}</h4>
    : null
}

export default SuccessMessage;