export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(el => (
        <button onClick={onLeaveFeedback} type="button" name={el} key={el}>
          {el}
        </button>
      ))}
    </div>
  );
};
