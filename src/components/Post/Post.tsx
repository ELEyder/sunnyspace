import './Post.css';
import type { IPost } from "../../interfaces/IPost";
import Comment from '../Comment/Comment';

interface PostProps {
    post: IPost,
}

export default function Post({ post } : PostProps) {
    return (
        <>
            <div className="post">
                <div className="post-header">
                    <a href="{% url 'viewUser' username=post.authorUsername %}">
                        <div className="avatar-icon">
                            <img src="img/favicon.jpg" alt="avatar" className="avatar-icon"/></div>
                    </a>
                    <div>
                        <a href="{% url 'viewUser' username=post.authorUsername %}" className="author-name"> {post.author} </a> <a href=""> post.action </a>
                        <p className="post"> post.date -  post.privacy </p>
                    </div>
                </div>
                <div className="post-main">
                    <p className="content">post.content</p>
                </div>
                <div className="post-media">
                        <img src="img/favicon.jpg" alt="" className="media"/>
                        <video controls className="media">
                            <source className="media" src="{{ post.urlMedia }}" type="video/mp4"/>
                            <source className="media" src="{{ post.urlMedia }}" type="video/avi"/>
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                </div>
                <div className="post-options">
                    <a className="btn-post-option {{ post.likeStatus }}" onClick={() => console.log("like(this);")}>Likes: post.likes</a>
                    <a className="btn-post-option" onClick={() => console.log("goComment") }>Comment</a>
                    <a className="btn-post-option"href="#">Searchs:  post.searchs </a>
                </div>
                

            <audio id="like-mp3" src="audio/like.mp3"></audio>
            <Comment />
            </div>
        </>
    );
}