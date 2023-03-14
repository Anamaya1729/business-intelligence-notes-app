import React from 'react';

function EffectiveDecisionMaking(props) {
  return (
    <div className="container mt-4" >
      <h2 className="mb-4" id="edtm">Effective Decision Making</h2>
      <ol>
        {props.data.DecisionMaking.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ol>
    </div>
  );
}

export default EffectiveDecisionMaking;
