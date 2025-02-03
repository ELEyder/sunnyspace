import { Link } from "react-router-dom"
import { IUser } from "../../interfaces/IUser"

import Button from "../Button/Button"
import styles from "./CardUser.module.css"
import Avatar from "../Avatar/Avatar"

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
              <div className={`${styles.statusCircle} ${user.status}`}></div>
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