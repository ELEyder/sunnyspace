
interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: "primary" | "secondary";
}

const IconButton: React.FC<ButtonProps> = ({ children = 'Botón', type = undefined, onClick = undefined, style = "primary" }) => {
  if (style === "primary") {
    return (
      <button type={type} className="btn-primary" onClick={onClick}>
        {children}
      </button>
    )
  } else {
    return (
      <button type={type} className="btn-secondary" onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default IconButton;