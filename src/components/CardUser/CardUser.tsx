import { Link } from "react-router-dom"
import { IUser } from "../../interfaces/IUser"
import Button from "../Button/Button"
import "./CardUser.css"

interface PropCardUser {
  user: IUser
}
export default function CardUser({ user }: PropCardUser) {
  return (
    <>
      <div className="usuario">
        <div className="default-user-state">
          <Link to={`user/@${user.firstName}`}>
            <div className="avatar-icon">
              <img src="img/favicon.jpg" alt="avatar" className="avatar-icon" />
            </div>
            <div className="state default-user">
              <div className={`state-circle default-user ${user.status}`}></div>
            </div>
          </Link>

        </div>
        <div className="usuario-text">
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