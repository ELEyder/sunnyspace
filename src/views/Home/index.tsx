import styles from './index.module.css';
import Post from '../../components/Post/Post';
import FormPost from '../../components/FormPost/FormPost';
import type { IPost } from '../../interfaces/IPost';
import CardUser from '../../components/CardUser/CardUser';
import { IUser } from '../../interfaces/IUser';
import { useEffect, useState } from 'react';
import apiClient from '../../client/apiClient';
import { IPostForm } from '../../interfaces/IPostFrom';

export default function Home() {

    const [posts, setPosts] = useState([])

    const exampleUser: IUser = {
        address: "Sin especificar",
        chats: ["Vnu7UXO9ZaXRJYT5hPiA"],
        country: "Sin especificar",
        email: "luis123bravolopez@gmail.com",
        firstName: "Luis",
        firstRegistration: new Date("2024-05-28T21:26:19Z"),
        friendRequestR: ["DX19BxwrToe6DYqPW0q2YhdKLLz1"],
        friendRequestS: ["4rCzntBc6setTIIWmEdqzzgiOFp2", "t5Iuh7MYGGWO192I6DOhgKaS8HH3"],
        friends: ["wawnLpjZEUSmsFYmCox4HJOOEQp1"],
        lastAccess: new Date("2024-05-28T21:26:19Z"),
        lastName: "Lopez",
        nicknames: ["SoLukii09"],
        phoneNumber: "Sin registros",
        posts: 0,
        postsD: [],
        status: "Online",
        studies: [],
        urlAvatar: "/media/avatars/08PsDw9sj2PpMtrMGmmyooHAdww1.jpg",
        username: "SoLukii09",
        works: []
    };

    async function fetchData() {
        await apiClient.get('/posts')
            .then(response => {
                setPosts(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    async function onDelete(id: string) {
        const response = await apiClient.delete(`posts/delete/${id}`)
        if (response.status == 200) {
            setPosts(prevPosts => prevPosts.filter(post => post['id'] !== id));
        }
    }

    async function onClickPost(data : IPostForm) {
        await apiClient.post('posts/create', data)   
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <section className={styles.posts}>
                <FormPost onClick={onClickPost}/>
                {posts.map((post: IPost, index: number) => (
                    <Post post={post} key={index} onDelete={() => onDelete(post.id)} />
                ))}
            </section>
            <section className={styles.users}>
                <div className={styles.container}>
                    <CardUser user={exampleUser} />
                    <CardUser user={exampleUser} />
                    <CardUser user={exampleUser} />
                    <CardUser user={exampleUser} />
                </div>
            </section>
        </>
    );
}