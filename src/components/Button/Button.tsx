import './Button.css';

interface ButtonProps {
  content?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ content = 'Botón', type = undefined }) => {
  return (
    <button type={ type } className="postear">{content}</button>
  )
}

export default Button;