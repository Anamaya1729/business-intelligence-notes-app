import React from 'react';

function Paragraph(props) {
  const { title, data, link } = props.props;

  return (
    <section className="container mt-4">
      <h2 className="mb-4 text-center display-10 title" id={`${link}`}>{title}</h2>
      <article className="row justify-content-center">
        <div >
          {data.map((paragraph, index) => (
            <p className="mb-4" key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Paragraph;
