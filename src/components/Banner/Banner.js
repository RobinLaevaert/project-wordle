import React from "react";

function Banner({ GuessCount, Answer, Success }) {
  return (
    <>
      {Success && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {GuessCount} guesses</strong>.
          </p>
        </div>
      )}

      {!Success && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{Answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
