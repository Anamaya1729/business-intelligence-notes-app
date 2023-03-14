import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function ImportantQuestion(props) {
    console.log(props.props)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center display-9 title" id='important'>Important Questions</h2>
      {props.props.map((question, index) => (
        <div key={index} className="card mb-4">
          <div
            className="card-header d-flex justify-content-between align-items-center"
            onClick={() => handleExpand(index)}
            style={{ cursor: 'pointer' }}
          >
            <h5 className="mb-0 text-center display-8">{question.question}</h5>
            <FontAwesomeIcon icon={expandedIndex === index ? faMinus : faPlus} />
          </div>
          {expandedIndex === index && (
            <div className="card-body">
              <p>{question.answer.map((paragraph, index) => (
            <p className="mb-4" key={index}>{paragraph}</p>
          ))}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImportantQuestion;
