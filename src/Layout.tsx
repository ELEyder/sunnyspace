import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import { IUserLogin } from './interfaces/IUserLogin';

export default function Plantilla() {
  const userLogin: IUserLogin = {
    username: "eyder",
    firstName: "Eyder",
    lastName: "Huayta",
    email: "eyder@gmail.com",
    status: "Online",
    urlAvatar: "img/favicon.jpg",
    friends: [
      {
        address: "Sin especificar",
        chats: ["Vnu7UXO9ZaXRJYT5hPiA"],
        country: "Sin especificar",
        email: "luis123bravolopez@gmail.com",
        firstName: "Luis",
        firstRegistration: new Date("2024-05-28T21:26:19Z"),
        friendRequestR: ["DX19BxwrToe6DYqPW0q2YhdKLLz1"],
        friendRequestS: ["4rCzntBc6setTIIWmEdqzzgiOFp2", "t5Iuh7MYGGWO192I6DOhgKaS8HH3"],
        friends: ["wawnLpjZEUSmsFYmCox4HJOOEQp1"],
        lastAccess: new Date("2024-05-28T21:26:19Z"),
        lastName: "Lopez",
        nicknames: ["SoLukii09"],
        phoneNumber: "Sin registros",
        posts: 0,
        postsD: [],
        status: "Online",
        studies: [],
        urlAvatar: "/media/avatars/08PsDw9sj2PpMtrMGmmyooHAdww1.jpg",
        username: "SoLukii09",
        works: []
      }
    ]
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