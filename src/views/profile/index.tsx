import Post from '../../components/Post/Post';
import type { IPost } from '../../interfaces/IPost';
import { IUserLogin } from '../../interfaces/IUserLogin';
import './index.css';

export default function Profile() {
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
    return (
        <main>
            <section className="profile">
                <div className="your-profile">
                    <div className="avatar">
                        <img src="img/favicon.jpg" alt="avatar" className="avatar" />
                    </div>
                    <h1 className="profile"> {userLogin.firstName} {userLogin.lastName} </h1>
                    <h2 className="profile"> {userLogin.username}</h2>
                    <p className="profile"> {userLogin.email} </p>
                </div>
                <div className="my-friends">
                    <h1>Friends</h1>
                    <a className="friend" href="{% url 'viewUser' username=friend.username %}">
                        <div className="friend">
                            <div className="avatar-icon friend-icon">
                                <img src="img/favicon.jpg" alt="avatar" className="avatar-icon" />
                            </div>
                            <p> friend.firstName friend.lastName </p>
                        </div>
                    </a>
                </div>
            </section>
            <section className="posts">
                <Post post={defaultPost} />
                <Post post={defaultPost} />
            </section>
        </main>
    )
} 