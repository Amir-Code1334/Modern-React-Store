
import { useEffect, useState } from "react";
import "./css/Products.css";
import "./css/Loading.css";
import { Link } from "react-router-dom";

export default function Products() {

    const api = "https://dummyjson.com/products";

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");


    async function getProducts() {

        try {

            const response = await fetch(api);

            if (response.ok) {

                const data = await response.json();

                setProducts(data.products);

            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    }


    useEffect(() => {

        getProducts();

    }, []);


    const categories = [
        "all",
        ...new Set(
            products.map((product) => product.category)
        ),
    ];


    const filteredProducts = products.filter((product) => {

        const matchesCategory =
            category === "all" ||
            product.category === category;

        const matchesSearch =
            product.title
                .toLowerCase()
                .includes(search.toLowerCase());

        return matchesCategory && matchesSearch;

    });


    return (
        <>

            {loading && (

                <div className="loading">

                    <div className="spinner"></div>

                    <h3>Loading...</h3>

                </div>

            )}


            {!loading && (

                <>

                    {/* SEARCH + FILTER */}

                    <div className="products-tools">

                        <div className="search-box">

                            <span className="search-icon">
                                🔍
                            </span>

                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                            {search && (

                                <button
                                    className="clear-search"
                                    onClick={() => setSearch("")}
                                >
                                    ×
                                </button>

                            )}

                        </div>


                        <div className="filter-box">

                            <span className="filter-icon">
                                ⚙
                            </span>

                            <select
                                value={category}
                                onChange={(e) =>
                                    setCategory(e.target.value)
                                }
                            >

                                {categories.map((cat) => (

                                    <option
                                        key={cat}
                                        value={cat}
                                    >
                                        {cat === "all"
                                            ? "All Products"
                                            : cat}
                                    </option>

                                ))}

                            </select>

                        </div>

                    </div>


                    {/* RESULT COUNT */}

                    <div className="products-result">

                        <span>
                            {filteredProducts.length}
                        </span>

                        {" "}products found

                    </div>


                    {/* PRODUCTS */}

                    <div className="products">

                        {filteredProducts.length > 0 ? (

                            filteredProducts.map((product) => (

                                <Link
                                    to={"/product/" + product.id}
                                    className="product-link"
                                    key={product.id}
                                >

                                    <article className="product">

                                        {/* DISCOUNT */}

                                        {product.discountPercentage && (

                                            <div className="discount-badge">

                                                -
                                                {Math.round(
                                                    product.discountPercentage
                                                )}
                                                %

                                            </div>

                                        )}


                                        {/* IMAGE */}

                                        <div className="product-image">

                                            <img
                                                src={product.thumbnail}
                                                alt={product.title}
                                            />

                                            <div className="image-overlay">
                                                View
                                            </div>

                                        </div>


                                        {/* INFO */}

                                        <div className="product-info">

                                            <div className="product-category">

                                                {product.category}

                                            </div>


                                            <p className="product-title">

                                                {product.title}

                                            </p>


                                            {/* RATING */}

                                            <div className="product-rating">

                                                <span className="stars">
                                                    ★
                                                </span>

                                                <span>
                                                    {product.rating?.toFixed(1)}
                                                </span>

                                                <span className="rating-count">
                                                    ({product.reviews?.length || 0})
                                                </span>

                                            </div>


                                            {/* PRICE */}

                                            <div className="product-bottom">

                                                <div className="price">

                                                    <strong>
                                                        ${product.price}
                                                    </strong>

                                                    {product.discountPercentage && (

                                                        <del>
                                                            $
                                                            {(
                                                                product.price /
                                                                (1 -
                                                                    product.discountPercentage /
                                                                    100)
                                                            ).toFixed(0)}
                                                        </del>

                                                    )}

                                                </div>


                                                <span className="view-product">

                                                    View →

                                                </span>

                                            </div>

                                        </div>

                                    </article>

                                </Link>

                            ))

                        ) : (

                            <div className="no-products">

                                <div className="no-products-icon">
                                    🔎
                                </div>

                                <h3>
                                    No products found
                                </h3>

                                <p>
                                    Try another search or category.
                                </p>

                            </div>

                        )}

                    </div>

                </>

            )}

        </>
    );
}


