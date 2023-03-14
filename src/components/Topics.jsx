import React from 'react';

function Topics(props) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4" id="topics">Topics of Business Intelligence</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.data.topics.map((topic) => (
            <tr key={topic.id}>
              <td href={`#${topic.link}`}>{topic.title}</td>
              <td>{topic.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Topics;
