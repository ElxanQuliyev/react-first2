import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BASE_URL } from "../../api/BaseConfig";
import "./product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action/CartAction";
import { toast } from "react-toastify";
const ProductList = () => {
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: false,
    });

  const [mainProducts, setMainProducts] = useState(null);

  const getProducts = () => {
    fetch(`${BASE_URL}/Home/HomeScroll`)
      .then((pro) => pro.json())
      .then((pr) => setMainProducts(pr));
  };
  useEffect(() => {
    getProducts();
  },[]);
  const dispatch=useDispatch()
  return (
    <section className="product-list">
      <div className="product-top">
        <Typography textAlign="center" my={3} variant="h3" component="h3">
          Sale Products
        </Typography>
      </div>
      {mainProducts === null ? (
        <>
          <Skeleton width={"50%"} count={3} />
          <Skeleton width={"60%"} count={4} />
          <Skeleton width={"20%"} count={2} />
        </>
      ) : (
        <Container>
          <Grid container spacing={2}>
            {mainProducts.category.products.map((product) => (
              <Grid key={product.id} item md={3} xs={12} sm={6}>
                <div className="product-item p-4">
                  <div className="product-img">
                    <img width={"100%"} src={product.photo} alt="" />
                    <div className="img-action">
                      <button onClick={()=>{
                        dispatch(addToCart(product.id,1))
                        notify()
                      }} className="add-to-cart">
                        <AddShoppingCartIcon />
                      </button>
                      <button className="add-to-favory">
                        <FavoriteBorderIcon />
                      </button>
                      <button className="compare">
                        <CompareArrowsOutlinedIcon />
                      </button>
                    </div>
                  </div>
                  {product.discount > 0 ? (
                    <p className="new-price">
                      <del>{product.priceNoDiscount} AZN</del>
                      <span>{product.currentPrice} AZN</span>
                    </p>
                  ) : (
                    <p className="new-price">{product.priceNoDiscount}</p>
                  )}
                  <Typography variant="h5" component="div">
                    <Link
                      className="product-title"
                      to={`/mehsullar/${product.id}`}
                    >
                      {product.title}
                    </Link>
                  </Typography>
                  {/* <p className="old-price">
                  <del>$4000</del>
                </p> */}
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </section>
  );
};

export default ProductList;
