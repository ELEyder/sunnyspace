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
    onDelete: () => void,
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

export default function Post({ post, onDelete }: PostProps) {

    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const navigate = useNavigate();

    return (
        <>
        <button onClick={onDelete}>Eliminar</button>
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <Avatar onClick={() => navigate(`user/@${post.id}`)} />
                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            <Link to={`user/@${post.authorN}`} >
                                <span className={styles.authorName}>
                                    {post.authorN} {post.authorL}
                                </span>
                                &nbsp;
                                {post.action}
                            </Link>
                        </p>
                        <p className={styles.postDate}>
                            {new Date(post.date).toLocaleString('es-ES', {
                                year: 'numeric',
                                month: 'short',  // Mes abreviado (e.g., "mar")
                                day: 'numeric',  // Día del mes
                                hour: 'numeric', // Hora
                                minute: 'numeric', // Minutos
                                hour12: false, // Formato de 24 horas
                            })} -  {post.privacy}</p>
                    </div>
                </div>
                <div className={styles.postMain}>
                    <p className={styles.content}> {post.content}</p>
                </div>
                <div className={styles.postMedia}>
                    {post.typeMedia === "image" ? (
                        <img src={post.urlMedia} alt="" className={styles.media} />
                    ) : post.typeMedia === "video" ? (
                        <video controls className={styles.media}>
                            <source src={post.urlMedia} type="video/mp4" />
                            <source src={post.urlMedia} type="video/avi" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                    ) : null}
                </div>
                <div className={styles.postOptions}>
                    <a className={`${styles.btnPostOption} ${post.likesD.includes('0') ? styles.active : styles.inactive}`} onClick={playAudio}>Likes: {post.likes}</a>
                    <a className={styles.btnPostOption} onClick={() => console.log("goComment")}>Comments: {post.comments}</a>
                    <a className={styles.btnPostOption} href="#">Searchs:  {post.searchs} </a>
                </div>

                <audio ref={audioRef} src="audio/like.mp3"></audio>
                <div className={styles.comments}>
                    <FormComment />
                    <Comment comment={comment} />
                </div>
            </div>
        </>
    );
}