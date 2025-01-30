import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import { IUserLogin } from './interfaces/IUserLogin';

export default function Plantilla() {
    const userLogin: IUserLogin = {
      firstName: "Eyder",
      lastName: "Huayta",
      status: "Online",
      urlAvatar: "img/favicon.jpg"
    }
  return (
    <>
      <Nav userLogin={userLogin} />
      <main>
        <Outlet />
      </main>
    </>
  )
};