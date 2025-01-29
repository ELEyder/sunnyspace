'use client';

import Image from "next/image";
import './page.css';
import './post.css';
import './comment.css';

export default function Home() {
  return (
    <main>
        <section className="posts">
            <form action="/post" className="postear" method="POST" encType="multipart/form-data">
                <input className="content" type="text" name="content" placeholder="¿En que piensas?" maxLength={1000}/>
                <div className="postear-option">
                    <label htmlFor="media" className="media">Select photo, gif or video</label>
                    <input type="file" name="media" className="media" id="media" accept=".jpg, .gif, .mp4" />
                    <button type="submit" className="postear">Post</button>
                </div>
            </form>
            <div className="post">
                <div className="post-header">
                    <a href="{% url 'viewUser' username=post.authorUsername %}">
                        <div className="avatar-icon">
                            <Image src="/img/favicon.jpg" alt="avatar" className="avatar-icon"/></div>
                    </a>
                    <div>
                        <a href="{% url 'viewUser' username=post.authorUsername %}" className="author-name"> post.authorName </a> <a href=""> post.action </a>
                        <p className="post"> post.date -  post.privacy </p>
                    </div>
                </div>
                <div className="post-main">
                    <p className="content">post.content</p>
                </div>
                <div className="post-media">
                        <Image src="/img/favicon.jpg" alt="" className="media"/>
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
                <div className="comments">
                    <div className="comment">
                        <div className="comment-header">
                            <a href="{% url 'viewUser' username=comment.authorUsername %}">
                                <div className="avatar-icon-comment">
                                    <Image src="/img/favicon.jpg" alt="avatar" className="avatar-icon-comment"/>
                                </div>
                            </a>
                        </div>
                        <div className="comment-body">
                            <a href="{% url 'viewUser' username=comment.authorUsername %}" className="author-name"> comment.authorName </a>
                            <p className="content"> comment.content </p>
                        </div>
                    </div>
                </div>
                <form className="prepare-coment" action="{% url 'comment' %}" method="POST">
                    <input type="text" className="content" name="comment" id="{{ post.id }}" placeholder="Comentario" required/>
                    <input type="hidden" name="idPost" value="{{ post.id }}"/>
                    <button type="submit" className="btn-comment">
                        <svg className="postear" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>
            </div>
            <audio id="like-mp3" src="/audio/like.mp3"></audio>
        </section>
        <section className="usuarios">
            <div className="users">
                <div className="usuario">
                    <a className="default-user-state" href="{% url 'viewUser' username=user.username %}">
                        <div className="avatar-icon">
                            <Image src="/img/favicon.jpg"  alt="avatar" className="avatar-icon"/>
                        </div>
                        <div className="state default-user">
                            <div className="state-circle default-user {{user.status}}"></div>
                        </div> 
                    </a>
                    <a href="{% url 'viewUser' username=user.username %}" className="usuario"> user.firstName  user.lastName </a>
                    <button className="btnAgregarAmigo {{ user.fStatus }}"> wa </button>
                </div>
            </div>
        </section>
    </main>
  );
}
