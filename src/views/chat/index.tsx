import { useState } from 'react';
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';
import Avatar from '../../components/Avatar/Avatar';
export default function Chat() {

    const [widthOverlay, setWidthOverlay] = useState('0')
    const [receiverStatus] = useState('Online')
    const navigate = useNavigate();

    function showOverlay() {
        setWidthOverlay('400px')
    }
    function closeOverlay() {
        setWidthOverlay('0px')
    }

    return (
        <main className={styles.container}>
            <div className={styles.overlay} style={{ width: widthOverlay }}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h1>Your Friends</h1>
                        <Button onClick={closeOverlay} style='secondary'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" strokeLinecap="round" strokeWidth="2" />
                                <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" strokeLinecap="round" strokeWidth="2" />
                            </svg>
                        </Button>
                    </div>
                    <div className={styles.cardChat} onClick={closeOverlay}>
                        <Avatar onClick={() => navigate('/')} />
                        <h2> Luis Bravo </h2>
                    </div>
                </div>
            </div>
            <section className={styles.chats}>
                <div className={styles.chatsHeader}>
                    <h1>Chats</h1>
                    <Button onClick={showOverlay}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 18V6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                    <Button onClick={() => navigate('/')}>
                    <svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 306.773 306.773">
<g>
	<path d="M302.93,149.794c5.561-6.116,5.024-15.49-1.199-20.932L164.63,8.898
		c-6.223-5.442-16.2-5.328-22.292,0.257L4.771,135.258c-6.092,5.585-6.391,14.947-0.662,20.902l3.449,3.592
		c5.722,5.955,14.971,6.665,20.645,1.581l10.281-9.207v134.792c0,8.27,6.701,14.965,14.965,14.965h53.624
		c8.264,0,14.965-6.695,14.965-14.965v-94.3h68.398v94.3c-0.119,8.264,5.794,14.959,14.058,14.959h56.828
		c8.264,0,14.965-6.695,14.965-14.965V154.024c0,0,2.84,2.488,6.343,5.567c3.497,3.073,10.842,0.609,16.403-5.513L302.93,149.794z"
		/>
</g>
</svg>
                    </Button>
                </div>
                <div className="chatsBody">
                    <div className={styles.cardChat}>
                        <div className={styles.defaultUserState}>
                            <Avatar onClick={() => navigate('/')} />
                            <div className={styles.defaultUser}>
                                <div className={`${styles.circle} ${receiverStatus == 'Online' ? styles.Online : styles.Disconected}`}></div>
                            </div>
                        </div>
                        <div>
                            <p>Luis Bravo Lopez</p>
                            <p>Tú: xd</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.chat} id="chat">
                <div className={styles.info} >
                    <h1>Aquí se mostraran tus chats</h1>
                </div>
                <div className={styles.chatHeader}>

                </div>
                <div className={styles.chatDetails}>

                </div>
                <div className={styles.inputChat}>
                    <Button type='media' style='secondary'>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 17.8333L8 12L11.5 15.5L16 9.08333L20.5 17.8333M3 17V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="11" cy="9" r="1" fill="#000000" />
                        </svg>
                    </Button>
                    <input type="text" id="message-input" className={styles.inputMsg} placeholder="Escribe tu mensaje aquí" />
                    <Button>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </div>
            </section>
        </main>
    )
} 