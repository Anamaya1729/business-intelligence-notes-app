import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTopButton() {
  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className="btn btn-secondary rounded-circle position-fixed end-0 bottom-0 mb-5 me-5"
      onClick={handleBackToTopClick}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTopButton;
