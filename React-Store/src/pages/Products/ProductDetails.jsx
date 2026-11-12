
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../css/ProductDetails.css";
import "../css/Loading.css";

export function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);


    // =========================
    // GET PRODUCT + COMMENTS
    // =========================

    async function getProduct() {

        try {

            setLoading(true);

            const productResponse = await fetch(
                "https://dummyjson.com/products/" + id
            );

            const commentsResponse = await fetch(
                "https://dummyjson.com/comments/post/" + id
            );

            if (productResponse.ok) {

                const productData = await productResponse.json();

                setProduct(productData);

            }

            if (commentsResponse.ok) {

                const commentsData = await commentsResponse.json();

                setComments(commentsData.comments);

            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    }


    // =========================
    // LOAD DATA
    // =========================

    useEffect(() => {

        getProduct();

    }, [id]);


    // =========================
    // LOADING
    // =========================

    if (loading) {

        return (

            <div className="loading">

                <div className="spinner"></div>

                <h3>Loading...</h3>

            </div>

        );

    }


    // =========================
    // JSX
    // =========================

    return (

        <div className="product-details">

            {/* BACK BUTTON */}

            <button
                className="back-button"
                onClick={() => {

                    if (window.history.length > 1) {

                        navigate(-1);

                    } else {

                        navigate("/products");

                    }

                }}
            >

                ← Back

            </button>


            {/* PRODUCT */}

            <div className="details-card">

                <div className="details-image">

                    <img
                        src={product.images?.[0]}
                        alt={product.title}
                    />

                </div>


                <div className="details-info">

                    <h1>
                        {product.title}
                    </h1>


                    <p className="details-description">
                        {product.description}
                    </p>


                    <div className="details-price">
                        ${product.price}
                    </div>


                    <div className="details-info-row">

                        <span>Brand</span>

                        <strong>
                            {product.brand}
                        </strong>

                    </div>


                    <div className="details-info-row">

                        <span>Category</span>

                        <strong>
                            {product.category}
                        </strong>

                    </div>


                    <div className="details-info-row">

                        <span>Rating</span>

                        <strong>
                            ⭐ {product.rating}
                        </strong>

                    </div>


                    <div className="details-info-row">

                        <span>Stock</span>

                        <strong>
                            {product.stock}
                        </strong>

                    </div>

                </div>

            </div>


            {/* COMMENTS */}

            <div className="comments">

                <h2>Comments</h2>


                {comments.length === 0 ? (

                    <p className="no-comments">
                        No comments yet.
                    </p>

                ) : (

                    comments.map((comment) => (

                        <div
                            className="comment"
                            key={comment.id}
                        >

                            <div className="comment-top">

                                <strong>
                                    {comment.user?.fullName}
                                </strong>

                                <span>
                                    ⭐
                                </span>

                            </div>


                            <p>
                                {comment.body}
                            </p>

                        </div>

                    ))

                )}

            </div>

        </div>

    );

}

