import React from 'react';

function Paragraph(props) {
    console.log(props.props)
  const { title, data , link} = props.props;

  return (
    <div className="container mt-4">
      <h2 className="mb-4" id={`#${link}`}>{title}</h2>
      <div className="row">
        <div className="col-md-8">
          {data.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Paragraph;
