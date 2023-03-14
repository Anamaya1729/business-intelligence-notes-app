import React from 'react';

function Topics(props) {
  return (
    <section className="container mt-4">
      <h2 className="mb-4 text-center title display-10" id="topics">Topics of Business Intelligence</h2>
      <table className="table">
        <thead>
          <tr>
            <th className='text-center title display-10'>Topic</th>
            <th className='text-center title display-10'>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.data.topics.map((topic) => (
            <tr key={topic.id}>
            <td className='text-center display-10'><a href={`#${topic.link}`}>{topic.title}</a></td>
              <td>{topic.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Topics;
