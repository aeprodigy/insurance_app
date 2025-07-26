

type buttonProps = {
    text: string;
    onClick?: ()=> void;
};

const Button:React.FC<buttonProps> = ({text, onClick}) => {
  return (
    <button
      className="text-white text-[15px] sm:text-[25px font-semibold bg-gray-800 px-4 py-2 rounded-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button