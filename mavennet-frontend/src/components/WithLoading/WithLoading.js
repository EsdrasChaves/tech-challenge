import React from 'react'

import './WithLoading.css'


const WithLoading = (Component) => {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
}

export default WithLoading
