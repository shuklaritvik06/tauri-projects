const Button = ({
  text,
  handler,
  disabled
}: {
  text: string;
  handler: () => void;
  disabled: boolean;
}) => {
  return (
    <div>
      <button
        className={`bg-[#fa893b] w-fit rounded-md text-white p-2 font-bold text-lg ${
          disabled ? "bg-[#f4a872]" : ""
        }`}
        disabled={disabled}
        onClick={() => handler()}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
