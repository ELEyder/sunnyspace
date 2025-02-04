import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IComment } from '../../interfaces/IComment';
import type { IPost } from "../../interfaces/IPost";
import Comment from '../Comment/Comment';
import FormComment from '../FormComment/FormComment';
import Avatar from '../Avatar/Avatar';

import styles from './Post.module.css';

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
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <Avatar onClick={() => navigate(`user/@${post.author}`)} />
                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            <Link to={`user/@${post.author}`} >
                                <span className={styles.authorName}>
                                    {post.author}
                                </span>
                                &nbsp;
                                {post.action}
                            </Link>
                        </p>
                        <p className={styles.postDate}> { post.date.toLocaleString() } -  {post.privacy} </p>
                    </div>
                </div>
                <div className={styles.postMain}>
                    <p className={styles.content}> { post.content }</p>
                </div>
                <div className={styles.postMedia}>
                    { post.typeMedia === "img" ? (
                        <img src={ post.urlMedia } alt="" className={styles.media}/>
                    ): post.typeMedia === "video" ? (
                        <video controls className={styles.media}>
                            <source src={ post.urlMedia } type="video/mp4"/>
                            <source src={ post.urlMedia } type="video/avi"/>
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                    ) : null}
                </div>
                <div className={styles.postOptions}>
                    <a className={`${styles.btnPostOption} ${ post.likesD.includes('0') ? styles.active : styles.inactive }`} onClick={playAudio}>Likes: {post.likes}</a>
                    <a className={styles.btnPostOption} onClick={() => console.log("goComment") }>Comments: {post.comments}</a>
                    <a className={styles.btnPostOption} href="#">Searchs:  {post.searchs} </a>
                </div>

                <audio ref={audioRef} src="audio/like.mp3"></audio>
                <div className={styles.comments}>
                    <FormComment />
                    <Comment comment={comment}/>
                </div>
            </div>
        </>
    );
}