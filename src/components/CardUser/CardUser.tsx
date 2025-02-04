import { Link } from "react-router-dom"
import { IUser } from "../../interfaces/IUser"

import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar"
import styles from "./CardUser.module.css"

interface PropCardUser {
  user: IUser
}
export default function CardUser({ user }: PropCardUser) {
  return (
    <>
      <div className={styles.usuario}>
        <div className={styles.userState}>
          <Link to={`user/@${user.firstName}`}>
            <Avatar />
            <div className={styles.status}>
              <div className={`${styles.statusCircle} ${user.status == 'Online' ? styles.Online : styles.Disconected}`}></div>
            </div>
          </Link>
        </div>
        <div className={styles.usuarioText}>
          <Link to={`user/@${user.firstName}`}>
            {user.firstName} {user.lastName}
          </Link>
        </div>
        <Button>
          Agregar
        </Button>
      </div>
    </>
  )
}