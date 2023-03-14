import React from 'react';

function Image(props) {
  const { src, alt, caption } = props;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 mx-auto">
          <img src={src} alt={alt} className="img-fluid mx-auto d-block" />
          {caption && <p className="text-center mt-2 title">{caption}</p>}
        </div>
      </div>
    </div>
  );
}

export default Image;