import { IUser } from "../../interfaces/IUser";
import { ICountry } from "../../interfaces/ICountry";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

  const userLogin: IUser = {
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
  };

  const countries : ICountry[] = [
  {
    id: '1',
    name: 'perú'
  },
  {
    id: '2',
    name: 'japón'
  }
]  
export default function FormConfig() {
  const navigate = useNavigate();

  return (
    <form className="configurar" method="POST" encType="multipart/form-data">
      <div className="option">
        <label htmlFor="avatar" className="avatar">Select new avatar</label>
        <input type="file" name="avatar" className="avatar" id="avatar" accept=".jpg, .gif" />
      </div>
      <div className="option">
        <label htmlFor="">First Name: </label>
        <input type="text" name="firstName" defaultValue={ userLogin.firstName } required />
      </div>
      <div className="option">
        <label htmlFor="">Last Name: </label>
        <input type="text" name="lastName" defaultValue={ userLogin.lastName } required />
      </div>
      <div className="option">
        <label htmlFor="">Country: </label>
        <select name="country" defaultValue={'1'} required>
          { countries.map( country => (
            <option key={ country.id } value={ country.id }> { country.name.charAt(0).toUpperCase() + country.name.slice(1) } </option>  
          )
          )}
        </select>
      </div>
      <div className="option">
        <label htmlFor="">Address: </label>
        <input type="text" name="address" defaultValue={ userLogin.address } required />
      </div>
      <div className="option">
        <label htmlFor="">Phone: </label>
        <input type="text" name="phone" pattern="[0-9]*" defaultValue={ userLogin.phoneNumber } required />
      </div>
      <Button
      onClick={() => navigate('/')}>
        Back
      </Button>
      <Button
      onClick={() => navigate('/')}>
        Save
      </Button>
    </form>
  )
}