import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Done!</h3>
      <p>All {count} users received the invintations.</p>
      <button
        className="send-invite-btn"
        onClick={() => window.location.reload()}
      >
        Go back
      </button>
    </div>
  );
};
