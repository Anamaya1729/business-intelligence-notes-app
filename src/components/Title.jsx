import React from 'react';

function Title(props) {
  const { title, tagline } = props;
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center title">{title}</h2>
      <p className="lead text-center">{tagline}</p>
    </div>
  );
}

export default Title;
