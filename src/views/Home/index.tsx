import './index.css';
import Post from '../../components/Post/Post';
import FormPost from '../../components/FormPost/FormPost';
import type { IPost } from '../../interfaces/IPost';
import CardUser from '../../components/CardUser/CardUser';

export default function Home() {



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
      <section className="posts">
        <FormPost />
        <Post post={defaultPost} />
      </section>
      <section className="usuarios">
        <div className="users">
          <CardUser />
        </div>
      </section>
    </>
  );
}