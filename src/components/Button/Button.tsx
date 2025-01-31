import './Button.css';

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = undefined, children = 'Botón'}) => {
  return (
    <button type={ type } className="postear">{children}</button>
  )
}

export default Button;