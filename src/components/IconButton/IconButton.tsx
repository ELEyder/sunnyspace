import styles from './IconButton.module.css';
interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const IconButton: React.FC<ButtonProps> = ({ children = 'Botón', type = undefined, onClick = undefined }) => {
    return (
      <button type={type} className={styles.btnPrimary} onClick={onClick}>
        {children}
      </button>
    )
}

export default IconButton;