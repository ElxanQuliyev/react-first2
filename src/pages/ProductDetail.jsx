import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/BaseConfig";
import ProductSpec from "../components/product-specification/ProductSpec";
import { addToCart } from "../Redux/Action/CartAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [singlePro, setSinglepro] = useState(null);
  const [specActive, setspecActive] = useState(false);
  const getProductInfo = (myId) => {
    fetch(`${BASE_URL}/product/${myId}`)
      .then((c) => c.json())
      .then((c) => setSinglepro(c));
  };
  const dispatch = useDispatch();
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: false,
    });

  useEffect(() => {
    getProductInfo(id);
  }, [id]);
  return (
    <div>
      {singlePro === null ? (
        <p>loading...</p>
      ) : (
        <section className="product-detail">
 
          <Container sx={{ my: "4rem" }}>
            <Grid container>
              <Grid md={5}>
                <div className="product-img">
                  <img
                    width={"100%"}
                    alt=""
                    src={
                      singlePro.productGalleries.filter((c) => c.mainPhoto)[0]
                        .photo
                    }
                  />
                </div>
                <div className="product-images my-4">
                  {singlePro.productGalleries.map((pic) => (
                    <img
                      src={pic.photo}
                      alt=""
                      style={{ width: "100px", objectFit: "contain" }}
                    />
                  ))}
                </div>
              </Grid>
              <Grid md={7}>
                <div className="product-info">
                  <h3>{singlePro.title}</h3>
                  <div
                    className={`product-spec ${
                      specActive ? "active-spec" : ""
                    }`}
                  >
                    <ProductSpec specific={singlePro.productFields} />
                  </div>
                  <button onClick={() => setspecActive((bv) => !bv)}>
                    ətraflı
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      dispatch(addToCart(singlePro.productId, 1));
                      notify();
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
