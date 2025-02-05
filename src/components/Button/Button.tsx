import styles from './Button.module.css';

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  setMedia?: (media: File | null) => void;
  block?: boolean;
  variant?: string;
}

const Button: React.FC<ButtonProps> = (
  {
    children = 'Botón',
    type = undefined,
    onClick = undefined,
    block = false,
    variant = 'primary',
    setMedia
  }) => {

  if (type === 'reset' && setMedia) {
    return (
      <label
        className={variant == 'primary' ? styles.button : styles.secondary}
        htmlFor="media">
        {children}
        <input type="file" name="media" id="media" className={styles.media} accept=".jpg, .gif, .mp4"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0];
              setMedia(file ?? null);
            }
          }} />
      </label>
    )
  } else {
    return (
      <button
      type={type}
      className={variant == 'primary' ? styles.button : styles.secondary}
      onClick={onClick}
      {...(block ? { style: { display: 'block', width: '100%' } } : {})}
      >
      {children}
    </button>
  )
}
}

export default Button;