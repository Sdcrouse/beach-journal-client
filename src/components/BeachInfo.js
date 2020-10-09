import React from 'react';

const BeachInfo = ({ label, children }) => (
  <p><strong className="beach-info-labels">{label}</strong>{children}</p>
)

export default BeachInfo;