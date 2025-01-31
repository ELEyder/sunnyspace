import './Button.css';

interface ButtonProps {
  content: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <button type="submit" className="postear">{content}</button>
  )
}

export default Button;