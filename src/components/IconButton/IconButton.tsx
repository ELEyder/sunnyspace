
interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const IconButton : React.FC<ButtonProps> = ({ children = 'Botón', type = undefined }) => {
  return (
    <button type={type} className="btn-comment">
      {children}
    </button>
  )
}

export default IconButton;