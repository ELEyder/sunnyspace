import { TextField } from '@mui/material';
import styles from './index.module.css';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>Regístrate</h2>
                <TextField label="Usuario" variant="outlined" style={{width: '100%'}}/>
                    <TextField label="Primer Nombre" variant="outlined" style={{width: '100%'}}/>
                    <TextField label="Segundo Nombre" variant="outlined" style={{width: '100%'}}/>
                    <TextField label="Email" variant="outlined" style={{width: '100%'}}/>
                    <TextField label="Contraseña" variant="outlined" style={{width: '100%'}}/>
                    <TextField label="Repite la contraseña" variant="outlined" style={{width: '100%'}}/>
                <div className={styles.remember}>
                    <label><input type="checkbox" required />Acepto los términos y condiciones</label>
                </div>
                <Button onClick={() => navigate('/')} block>
                Sign Up
                </Button>
                    <p className={styles.signLink}>Already have an account? <Link to="/" className={styles.link}>Sign In</Link></p>
            </form>
        </main>
    );
};

export default Register;