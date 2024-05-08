import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      <p>
        The taget time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
