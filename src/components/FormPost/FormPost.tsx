import Button from '../Button/Button';
import './FormPost.css';

export default function FormPost() {
    return (
        <>
            <form action="/post" className="postear" method="POST" encType="multipart/form-data">
                <input className="content" type="text" name="content" placeholder="¿En que piensas?" maxLength={1000} />
                <div className="postear-option">
                    <Button content={
                        <>
                            <label htmlFor="media" className="media">Selecciona una foto o Video</label>
                            <input type="file" name="media" className="media" id="media" accept=".jpg, .gif, .mp4" />
                        </>
                    } />
                    <Button content="Postear"/>
                </div>
            </form>
        </>
    );
}