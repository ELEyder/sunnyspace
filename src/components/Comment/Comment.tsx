import { IComment } from '../../interfaces/IComment';
import Avatar from '../Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import styles from './Comment.module.css'
interface PropsComment {
    comment: IComment
}
export default function Comment({ comment }: PropsComment) {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.comment}>
                <div style={{margin: "0 10px 0 0"}}>
                    <Avatar onClick={() => navigate('/')} />
                </div>
                <div className={styles.body}>
                    <div className={styles.commentText}>
                        <p className={styles.content}> {comment.content} </p>
                    </div>
                    <div className={styles.commentMedia}>
                        {comment.typeMedia === "img" ? (
                            <img src={comment.urlMedia} alt="" className={styles.media} />
                        ) : comment.typeMedia === "video" ? (
                            <video controls className={styles.media}>
                                <source className="media" src={comment.urlMedia} type="video/mp4" />
                                <source className="media" src={comment.urlMedia} type="video/avi" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}