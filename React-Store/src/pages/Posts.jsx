import { useEffect, useState } from "react";
import "./css/Posts.css";

export default function Posts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getPosts() {

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            if (response.ok) {

                const data = await response.json();

                setPosts(data);
            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);


    if (loading) {
        return (
            <div className="posts-loading">
                <div className="posts-spinner"></div>
                <p>Loading posts...</p>
            </div>
        );
    }


    return (
        <main className="posts-page">

            <div className="posts-header">
                <span>POSTS</span>

                <h1>Latest Posts</h1>

                <p>
                    Discover our latest posts and stories.
                </p>
            </div>


            <div className="posts-grid">

                {posts.map((post) => (

                    <article
                        className="post-card"
                        key={post.id}
                    >

                        <div className="post-number">
                            #{post.id}
                        </div>

                        <h2>
                            {post.title}
                        </h2>

                        <p>
                            {post.body}
                        </p>

                        <button>
                            Read More →
                        </button>

                    </article>

                ))}

            </div>

        </main>
    );
}