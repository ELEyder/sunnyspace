import styles from './index.module.css';

const Login: React.FC = () => {
    return (
        <main className={styles.default}>
            <form method="POST">
                <h2>SENATINET</h2>
                <div className={styles.inputGroup}>
                    <input type="email" name="email" required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="password" name="password" required />
                    <label htmlFor="password">Password</label>
                </div>
                <div className={styles.remember}>
                    <label><input type="checkbox" /> Remember me</label>
                </div>
                <button type="submit" className={styles.btn}>Login</button>
                <div className={styles.signLink}>
                    <p>Don't have an account? <a href="#" className={styles.signUpLink}>Sign Up</a></p>
                </div>
            </form>

            <form action="{% url 'signup' %}" method="POST">
                <h2>Sign Up</h2>
                <div className={styles.inputGroup}>
                    <input type="text" name="username" pattern="[a-z0-9_-]+" required />
                    <label htmlFor="username">Username*</label>
                </div>
                <div className={styles.inputGroupNames}>
                    <div className={`${styles.inputGroup} ${styles.medium}`}>
                        <input type="text" name="firstname" required />
                        <label htmlFor="firstname">First Name*</label>
                    </div>
                    <div className={`${styles.inputGroup} ${styles.medium}`}>
                        <input type="text" name="lastname" required />
                        <label htmlFor="lastname">Last Name*</label>
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <input type="email" name="email" required />
                    <label htmlFor="email">Email*</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="password" name="password1" required />
                    <label htmlFor="password1">Password*</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="password" name="password2" required />
                    <label htmlFor="password2">Password*</label>
                </div>
                <div className={styles.remember}>
                    <label><input type="checkbox" required /> I agree to the terms & conditions</label>
                </div>
                <button type="submit" className={styles.btn}>Sign Up</button>
                <div className={styles.signLink}>
                    <p>Already have an account? <a href="#" className={styles.signInLink}>Sign In</a></p>
                </div>
            </form>
        </main>
    );
};

export default Login;