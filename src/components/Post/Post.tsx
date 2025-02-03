import { useRef } from 'react';
import './Post.css';
import type { IPost } from "../../interfaces/IPost";
import Comment from '../Comment/Comment';
import { Link, useNavigate } from 'react-router-dom';
import { IComment } from '../../interfaces/IComment';
import Avatar from '../Avatar/Avatar';

interface PostProps {
    post: IPost,
}

const comment: IComment = {
    author: 'Eyder',
    content: 'Contenido por Defecto',
    date: new Date(),
    likes: 1,
    likesD: ['0'],
    post: '0',
    typeMedia: 'img',
    urlMedia: 'img/favicon.jpg'
}

export default function Post({ post } : PostProps) {

    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const navigate = useNavigate();
    return (
        <>
            <div className="post">
                <div className="post-header">
                <Avatar onClick={() => navigate(`user/@${post.author}`)} />
                    <div>
                        <Link to={`user//@${post.author}`} className="author-name"> {post.author} </Link> <a href=""> {post.action} </a>
                        <p className="post"> { post.date.toLocaleString() } -  {post.privacy} </p>
                    </div>
                </div>
                <div className="post-main">
                    <p className="content"> { post.content }</p>
                </div>
                <div className="post-media">
                        { post.typeMedia === "img" ? (
                            <img src={ post.urlMedia } alt="" className="media"/>

                        ): post.typeMedia === "img" ? (
                         <video controls className="media">
                            <source className="media" src={ post.urlMedia } type="video/mp4"/>
                            <source className="media" src={ post.urlMedia } type="video/avi"/>
                            Tu navegador no soporta la reproducción de videos.
                         </video>
                        ) : null}
                </div>
                <div className="post-options">
                    <a className={`btn-post-option ${ post.likesD.includes('0') ? 'active' : 'inactive' }`} onClick={playAudio}>Likes: {post.likes}</a>
                    <a className="btn-post-option" onClick={() => console.log("goComment") }>Comments: {post.comments}</a>
                    <a className="btn-post-option"href="#">Searchs:  {post.searchs} </a>
                </div>
                

            <audio ref={audioRef} src="audio/like.mp3"></audio>
            <Comment comment={comment}/>
            </div>
        </>
    );
}