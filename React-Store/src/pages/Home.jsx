
import { useEffect, useState } from "react";
import "./css/Home.css";

export default function Home() {

    const [comments, setComments] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [heroProducts, setHeroProducts] = useState([]);
    const [heroIndex, setHeroIndex] = useState(0);


    // COMMENTS + PRODUCTS
    async function getData() {

        try {

            const commentsResponse = await fetch(
                "https://dummyjson.com/comments?limit=3"
            );

            const productsResponse = await fetch(
                "https://dummyjson.com/products?limit=3"
            );


            if (commentsResponse.ok && productsResponse.ok) {

                const commentsData =
                    await commentsResponse.json();

                const productsData =
                    await productsResponse.json();


                setComments(commentsData.comments);
                setProducts(productsData.products);

            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    }


    // HERO PRODUCTS
    useEffect(() => {

        async function getHeroProducts() {

            try {

                const response = await fetch(
                    "https://dummyjson.com/products?limit=10"
                );


                if (response.ok) {

                    const data = await response.json();

                    setHeroProducts(data.products);

                }

            } catch (error) {

                console.log(error);

            }

        }


        getHeroProducts();

    }, []);


    // CHANGE HERO EVERY 2 SECONDS
    useEffect(() => {

        if (heroProducts.length === 0) return;


        const timer = setInterval(() => {

            setHeroIndex((prev) => {

                return (prev + 1) % heroProducts.length;

            });

        }, 3000);


        return () => clearInterval(timer);

    }, [heroProducts]);


    // LOAD DATA
    useEffect(() => {

        getData();

    }, []);


    return (
        <>

            {/* ================= HERO ================= */}

            {heroProducts.length > 0 && (

                <section className="hero">

                    <div className="hero-content">

                        <span className="hero-label">
                            FEATURED PRODUCT
                        </span>


                        <h1>
                            {heroProducts[heroIndex].title}
                        </h1>


                        <p>
                            {heroProducts[heroIndex].description}
                        </p>


                        <div className="hero-price">
                            ${heroProducts[heroIndex].price}
                        </div>


                        <button className="hero-button">
                            View Product →
                        </button>

                    </div>


                    <div className="hero-image">

                        <img
                            key={heroProducts[heroIndex].id}
                            src={heroProducts[heroIndex].thumbnail}
                            alt={heroProducts[heroIndex].title}
                        />

                    </div>

                </section>

            )}


            {/* ================= REVIEWS ================= */}

            <section className="reviews">

                <div className="reviews-header">

                    <span>
                        REVIEWS
                    </span>


                    <h2>
                        What our customers say
                    </h2>


                    <p>
                        Real experiences from people who tried our products.
                    </p>

                </div>


                {loading ? (

                    <div className="reviews-loading">
                        Loading reviews...
                    </div>

                ) : (

                    <div className="review-grid">

                        {comments.map((comment, index) => (

                            <div
                                className="review-card"
                                key={comment.id}
                            >

                                {/* STARS */}

                                <div className="stars">
                                    ★★★★★
                                </div>


                                {/* COMMENT */}

                                <p>
                                    "{comment.body}"
                                </p>


                                {/* USER */}

                                <div className="review-user">

                                    <div className="user-avatar">

                                        {comment.user?.fullName?.charAt(0)}

                                    </div>


                                    <div>

                                        <strong>
                                            {comment.user?.fullName}
                                        </strong>


                                        <span>
                                            Verified Customer
                                        </span>

                                    </div>

                                </div>


                                {/* PRODUCT */}

                                {products[index] && (

                                    <div className="review-product">

                                        <img
                                            src={products[index].thumbnail}
                                            alt={products[index].title}
                                        />


                                        <div>

                                            <strong>
                                                {products[index].title}
                                            </strong>


                                            <span>
                                                ${products[index].price}
                                            </span>

                                        </div>

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                )}

            </section>


            {/* ================= FOOTER ================= */}

            <footer className="footer">

                <div className="footer-top">


                    <div className="footer-brand">

                        <h2>
                            A.VAGHARI
                        </h2>


                        <p>
                            Modern products. Simple shopping.
                            Everything you need in one place.
                        </p>

                    </div>


                    <div className="footer-column">

                        <h3>
                            Store
                        </h3>


                        <p>
                            Home
                        </p>


                        <p>
                            Products
                        </p>


                        <p>
                            About us
                        </p>

                    </div>


                    <div className="footer-column">

                        <h3>
                            Contact
                        </h3>


                        <p>
                            Email
                        </p>


                        <p>
                            Support
                        </p>


                        <p>
                            Customer Service
                        </p>

                    </div>


                    <div className="footer-column">

                        <h3>
                            Information
                        </h3>


                        <p>
                            Quality Products
                        </p>


                        <p>
                            Fast Experience
                        </p>


                        <p>
                            Customer First
                        </p>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © 2026 Store Product
                    </span>


                    <span>
                        Made with ❤️ by A.VAGHARI
                    </span>

                </div>

            </footer>

        </>
    );
}

