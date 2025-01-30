import './Comment.css';
import FormComment from '../FormComment/FormComment';
export default function Comment() {
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
                    <div className="comment-body">
                        <a href="{% url 'viewUser' username=comment.authorUsername %}" className="author-name"> comment.authorName </a>
                        <p className="content"> comment.content </p>
                    </div>
                </div>
            </div>
        </>
    );
}