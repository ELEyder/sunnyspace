import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './index.module.css';
import TextField from '@mui/material/TextField';

const Login: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>Iniciar Sesión</h2>
                <TextField label="Email" variant="outlined" style={{width: '100%'}}/>
                <TextField label="Password" variant="outlined" style={{width: '100%'}}/>
                <div className={styles.remember}>
                    <label><input type="checkbox" /> Remember me</label>
                </div>
                <Button onClick={() => navigate('/')} block>
                    Login    
                </Button>
                <div className={styles.signLink}>
                    <p>Don't have an account? <Link to="/register" className={styles.signUpLink}>Sign Up</Link></p>
                </div>
            </form>

        </main>
    );
};

export default Login;