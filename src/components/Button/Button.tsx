import './Button.css';

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children = 'Botón', type = undefined }) => {
  return (
    <button type={ type } className="postear">{children}</button>
  )
}

export default Button;