import styles from './Button.module.css';

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  block?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children = 'Botón', type = undefined, onClick = undefined, block = false }) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      {...(block ? { style: { display: 'block', width: '100%' } } : {})}
    >
      {children}
    </button>
  )
}

export default Button;