import './Post.css';

export default function FormPost() {
    return (
        <>
            <form action="/post" className="postear" method="POST" encType="multipart/form-data">
                <input className="content" type="text" name="content" placeholder="¿En que piensas?" maxLength={1000}/>
                <div className="postear-option">
                    <label htmlFor="media" className="media">Select photo, gif or video</label>
                    <input type="file" name="media" className="media" id="media" accept=".jpg, .gif, .mp4" />
                    <button type="submit" className="postear">Post</button>
                </div>
            </form>
        </>
    );
}