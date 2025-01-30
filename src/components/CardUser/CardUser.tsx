import "./CardUser.css"
export default function CardUser() {
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
        <a href="{% url 'viewUser' username=user.username %}" className="usuario"> user.firstName user.lastName </a>
        <button className="btnAgregarAmigo {{ user.fStatus }}"> wa </button>
      </div>
    </>
  )
}