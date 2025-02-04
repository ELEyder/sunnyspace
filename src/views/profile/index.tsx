import { Link } from 'react-router-dom';
import Post from '../../components/Post/Post';
import type { IPost } from '../../interfaces/IPost';
import { IUserLogin } from '../../interfaces/IUserLogin';
import styles from './index.module.css';
import Avatar from '../../components/Avatar/Avatar';

const defaultPost: IPost = {
    id: '',
    author: 'Autor por defecto',
    content: 'Contenido por defecto',
    date: new Date(),
    likes: 0,
    likesD: [],
    comments: 0,
    commentsD: [],
    privacy: 'Public',
    privacyD: [],
    searchs: 0,
    searchsD: [],
    typeMedia: 'img',
    urlMedia: 'img/favicon.jpg',
};

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

export default function Profile() {

    return (
        <main className={styles.profile}>
            <section className={styles.cardUser}>
                <div className={styles.header}>
                    <h1>Perfil</h1>
                    <div className={styles.avatarContainer}>
                        <img src="img/favicon.jpg" alt="avatar" className={styles.avatar} />
                    </div>
                    <h1 className={styles.text}> {userLogin.firstName} {userLogin.lastName} </h1>
                    <h2 className={styles.text}> @{userLogin.username}</h2>
                    <p className={styles.text}> {userLogin.email} </p>
                </div>
                <div className={styles.friends}>
                    <h1>Amigos</h1>
                    <div className={styles.friendsContainer}>
                        <Link to={`user//@${userLogin.firstName}`} className={styles.friend} >
                            <Avatar />
                            <p> Eyder </p>
                            <p> Huayta </p>
                        </Link>
                        <Link to={`user//@${userLogin.firstName}`} className={styles.friend} >
                            <Avatar />
                            <p> Eyder </p>
                            <p> Huayta </p>
                        </Link>
                    </div>
                </div>
                <div className={styles.friends}>
                    <h1>Amigos</h1>
                    <div className={styles.friendsContainer}>
                        <Link to={`user//@${userLogin.firstName}`} className={styles.friend} >
                            <Avatar />
                            <p> Eyder </p>
                            <p> Huayta </p>
                        </Link>
                        <Link to={`user//@${userLogin.firstName}`} className={styles.friend} >
                            <Avatar />
                            <p> Eyder </p>
                            <p> Huayta </p>
                        </Link>
                    </div>
                </div>
                <div className={styles.friends}>
                    <h1>Amigos</h1>
                    <div className={styles.friendsContainer}>
                        <Link to={`user//@${userLogin.firstName}`} className={styles.friend} >
                            <Avatar />
                            <p> Eyder </p>
                            <p> Huayta </p>
                        </Link>
                        <Link to={`user//@${userLogin.firstName}`} className={styles.friend} >
                            <Avatar />
                            <p> Eyder </p>
                            <p> Huayta </p>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.posts}>
                <Post post={defaultPost} />
                <Post post={defaultPost} />
            </section>
        </main>
    )
} 