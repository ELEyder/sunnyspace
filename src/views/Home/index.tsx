import styles from './index.module.css';
import Post from '../../components/Post/Post';
import FormPost from '../../components/FormPost/FormPost';
import type { IPost } from '../../interfaces/IPost';
import CardUser from '../../components/CardUser/CardUser';
import { IUser } from '../../interfaces/IUser';

export default function Home() {

  const defaultPost: IPost = {
    id: '',
    author: 'Autor',
    action: 'se ha unido a Senatinet',
    content: 'Contenido por defecto',
    date: new Date(),
    likes: 1,
    likesD: ['0'],
    comments: 0,
    commentsD: [],
    privacy: 'Public',
    privacyD: [],
    searchs: 0,
    searchsD: [],
    typeMedia: 'img',
    urlMedia: 'img/favicon.jpg'
  };

  const exampleUser: IUser = {
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

  return (
    <>
      <section className={styles.posts}>
        <FormPost />
        <Post post={defaultPost} />
        <Post post={defaultPost} />
        <Post post={defaultPost} />
      </section>
      <section className={styles.users}>
        <div className={styles.container}>
          <CardUser user={exampleUser}/>
          <CardUser user={exampleUser}/>
          <CardUser user={exampleUser}/>
          <CardUser user={exampleUser}/>
        </div>
      </section>
    </>
  );
}