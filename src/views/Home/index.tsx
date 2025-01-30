import './index.css';
import './comment.css';
import Nav from '../../components/Nav/Nav';
import { IUserLogin } from '../../interfaces/IUserLogin';
import Post from '../../components/Post/Post';
import FormPost from '../../components/FormPost/FormPost';
import type { IPost } from '../../interfaces/IPost';

export default function Home() {

    const userLogin: IUserLogin = {
        firstName: "Eyder",
        lastName: "Huayta",
        status: "Online",
        urlAvatar: "img/favicon.jpg"
    }

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
        typeMedia: '',
        urlMedia: ''
    };

    return (
        <>
            <Nav userLogin={userLogin} />
            <main>
                <section className="posts">
                    <FormPost />
                    <Post post={defaultPost} />
                </section>
                <section className="usuarios">
                    <div className="users">
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
                    </div>
                </section>
            </main>
        </>
    );
}