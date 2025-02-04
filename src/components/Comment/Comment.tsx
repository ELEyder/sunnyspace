import FormComment from '../FormComment/FormComment';
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
                <div className="comment">
                    <div className="comment-header">
                        <Avatar onClick={() => navigate('/')}/>
                    </div>
                    <div className='comment-body'>
                        <div className="comment-text">
                            <p className="content"> {comment.content} </p>
                        </div>
                        <div className="comment-media">
                            {comment.typeMedia === "img" ? (
                                <img src={comment.urlMedia} alt="" className="media" />
                            ) : comment.typeMedia === "video" ? (
                                <video controls className="media">
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