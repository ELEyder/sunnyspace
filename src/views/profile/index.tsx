import Post from '../../components/Post/Post';
import type { IPost } from '../../interfaces/IPost';
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
        typeMedia: '',
        urlMedia: ''
      };

  return (
    <main>
        <section className="profile">
            <div className="your-profile">
                <div className="avatar">
                    <img src="{{ userData.urlAvatar }}" alt="avatar" className="avatar"/>
                </div>
                <h1 className="profile"> userData.firstName </h1>
                <h2 className="profile"> userData.username</h2>
                <p className="profile"> userData.email </p>
            </div>
            <div className="my-friends">
                <h1>Friends</h1>
                <a className="friend" href="{% url 'viewUser' username=friend.username %}">
                    <div className="friend">
                        <div className="avatar-icon friend-icon">
                            <img src="/img/favicon.jpg" alt="avatar" className="avatar-icon"/>
                        </div>
                        <p> friend.firstName friend.lastName </p>
                    </div>
                </a>
            </div>
        </section>
        <section className="posts">
            <Post post={defaultPost} />
        </section>
    </main>
  )
} 