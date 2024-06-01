import React, { useEffect, useState, useContext } from 'react';
import './detail.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaEdit, FaTrash,FaFacebookF, FaTwitter, FaPinterestP} from 'react-icons/fa';
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { GrStatusGood } from "react-icons/gr";
import Card from '../../components/det/Card';

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getProduct, deleteProduct } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const [postDetail, setPostDetail] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [carouselImages, setCarouselImages] = useState([]);

    useEffect(() => {
        const product = getProduct(parseInt(id));
        if (product) {
            setPostDetail(product);
            setSelectedImage(product.imgProd);
            setCarouselImages(product.imgsProd);
        }
    }, [id, getProduct]);

    const handleDelete = () => {
        deleteProduct(parseInt(id));
        navigate('/');
    };

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    if (!postDetail) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid" src={selectedImage} alt="Product" id="product-detail" />
                            </div>
                            <Carousel
                                additionalTransfrom={0}
                                arrows
                                autoPlaySpeed={3000}
                                centerMode={false}
                                className=""
                                containerClass="carousel-container"
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 1024
                                        },
                                        items: 3,
                                        partialVisibilityGutter: 40
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0
                                        },
                                        items: 1,
                                        partialVisibilityGutter: 30
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 464
                                        },
                                        items: 2,
                                        partialVisibilityGutter: 30
                                    }
                                }}
                                showDots
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                            >
                                {carouselImages.map((image, index) => (
                                    <img
                                        key={index}
                                        className="carousel-img"
                                        src={image}
                                        alt={`CarouselImage ${index}`}
                                        onClick={() => handleClick(image)}
                                    />
                                ))}
                            </Carousel>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>{postDetail.categorie}</strong></p>
                                    </li>
                                    <h1 className="h2 upp">{postDetail.nom}</h1>
                                    <div className="disp">
                                        <span className="h3 bs">${postDetail.prix}</span>
                                        <span className="unv"><GrStatusGood className='green' /> disponible </span>
                                    </div>
                                    <div className="share-links social-sharing">
                                        <ul className="social-list d-flex">
                                            <li className="social-title">Condividi</li>
                                            <li className="social-item"><FaFacebookF style={{fontSize:'1.5rem'}}/>
                                            </li>
                                            <li className="social-item"><FaTwitter style={{fontSize:'1.5rem'}}/>
                                            </li>
                                            <li className="social-item"><FaPinterestP style={{fontSize:"1.5rem"}}/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="whatsapp-help-component" className="v-center">
                                        <div className="needService">
                                            <img src="https://cdn.shopify.com/s/files/1/0071/0760/8612/t/17/assets/whatsapp-icon.png?v=1691993355" alt="attention" className="m" />
                                            <p className="mr-auto mr-sm-0">Hai bisogno di consigli  <br className="d-md-none d-lg-flex" />
                                                <strong>su WhatsApp</strong>
                                            </p>
                                        </div>
                                        <a href="https://wa.me/33756878304" rel="noreferrer" className="wslink button-secondary-outline button-small mx-auto mr-sm-0 pr-3 pl-3" target="_blank">
                                            <span>Scrivici</span>
                                        </a>
                                    </div>

                                    <button className="cl" onClick={() => addToCart(postDetail)}>Aggiungi al carrello</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group mt-3">
                        <Link className="btn btn-primary" to={`/post?edit=${postDetail.id}`} state={postDetail}>
                            <FaEdit /> Éditer
                        </Link>
                        <button className="btn btn-danger" onClick={handleDelete}>
                            <FaTrash /> Supprimer
                        </button>
                    </div>
                    < Card cat={postDetail.categorie} />
                </div>
            </section>
            <Footer />
            {/* <BackTo /> */}
        </>
    );
};

export default Detail;
