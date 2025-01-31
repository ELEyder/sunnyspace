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
        <a className="default-user-state" href="{% url 'viewUser' username=user.username %}">
          <div className="avatar-icon">
            <img src="img/favicon.jpg" alt="avatar" className="avatar-icon" />
          </div>
          <div className="state default-user">
            <div className="state-circle default-user {{user.status}}"></div>
          </div>
        </a>
        <a href="{% url 'viewUser' username=user.username %}" className="usuario"> {user.firstName} {user.lastName} </a>
        <Button content="Agregar" />
      </div>
    </>
  )
}