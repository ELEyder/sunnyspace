import './Comment.css';
import FormComment from '../FormComment/FormComment';
import { IComment } from '../../interfaces/IComment';

interface PropsComment {
    comment: IComment
}
export default function Comment({ comment }: PropsComment) {
    return (
        <>
            <FormComment />

            <div className="comments">
                <div className="comment">
                    <div className="comment-header">
                        <a href="{% url 'viewUser' username=comment.authorUsername %}">
                            <div className="avatar-icon-comment">
                                <img src="img/favicon.jpg" alt="avatar" className="avatar-icon-comment" />
                            </div>
                        </a>
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
            </div>
        </>
    );
}