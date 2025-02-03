import styles from "./Avatar.module.css"

interface PropsAvatar {
  src?: string,
  onClick?: () => void
}

export default function Avatar( { src = "img/favicon.jpg", onClick = undefined } : PropsAvatar) {
  return (
    <div className={styles.avatarContainer} onClick={onClick}>
      <img src={src} alt="avatar" className={styles.avatar} />
    </div>
  )
}