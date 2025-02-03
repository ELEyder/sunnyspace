import styles from './Button.module.css';

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children = 'Botón', type = undefined, onClick = undefined }) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;