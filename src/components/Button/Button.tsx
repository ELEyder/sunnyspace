import styles from './Button.module.css';

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "media";
  onClick?: () => void;
  block?: boolean;
  style?: string;
}

const Button: React.FC<ButtonProps> = (
  { 
    children = 'Botón',
    type = undefined,
    onClick = undefined,
    block = false,
    style = 'primary'
  }) => {

  if (type === 'media') {
    return (
      <label
      className={style == 'primary' ? styles.button : styles.secondary}
      htmlFor="media">
        {children}
        <input type="file" name="media" id="media" className={styles.media} accept=".jpg, .gif, .mp4" />
      </label>
    )
  }
  return (
    <button
      type={type}
      className={style == 'primary' ? styles.button : styles.secondary}
      onClick={onClick}
      {...(block ? { style: { display: 'block', width: '100%' } } : {})}
    >
      {children}
    </button>
  )
}

export default Button;