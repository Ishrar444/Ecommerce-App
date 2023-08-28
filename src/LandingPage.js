import Home from "./Home";
import { useEffect, useState } from "react";
import SideBar from "./pages/SideBar";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loader from "./pages/Loader";
import Banner from "./pages/Banner";
import { useLocation, useParams } from "react-router-dom";
import noProductImg from "../src/pages/assets/images-removebg-preview.png";

function LandingPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [isloading, setIsloading] = useState(true);

  const { query } = useParams();
  console.log("searchQuerrrrrrrrrrrryyyyy", query);
  let url =
    category == "All"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${category}`;
  const handleClick = (e) => {
    setCategory(e.target.value);
  };
  const cateStyle = {
    marginTop: "20px",
    marginBottom: "30px",
    marginLeft: "38%",
  };

  const filteredProducts = query
    ? products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    : products;
  const fetchData = async () => {
    try {
      await axios.get(url).then((res) => {
        setProducts(res.data);
        setIsloading(false);
      });
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="container" style={{ paddingBottom: "50px", gap: "10px" }}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <>
        <div className="container px-0" style={{ marginTop: "47px" }}>
          <Banner />
          {filteredProducts.length > 0 && (
            <div style={cateStyle}>
              <h5>Search By Category</h5>
              <select
                onClick={handleClick}
                className="form-control me-2"
                style={{ width: "290px" }}
              >
                <option value="">Select catagory</option>
                <option value="All"> All category</option>

                <option value="men's clothing"> men's clothing</option>
                <option value="jewelery"> jewelery</option>
                <option value="women's clothing"> women's clothing</option>
                <option value="electronics"> electronics</option>
              </select>
            </div>
          )}
        </div>
      </>

      {isloading ? (
        <Loader />
      ) : (
        <div
          className="row row-cols-3 row-cols-md-3 g-3"
          style={{ margin: "150px", marginTop: "-4px" }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => {
              return (
                <div key={index}>
                  <Home
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                    id={item.id}
                  />
                </div>
              );
            })
          ) : (
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <img
                  src="https://i.imgur.com/dCdflKN.png"
                  width={130}
                  height={130}
                  className="img-fluid mb-4 mr-3"
                />
                <h3>
                  <strong> No Product Found</strong>
                </h3>

                {/* <a
              
              className="btn btn-primary cart-btn-transform m-3"
              data-abc="true"
            >
              Search Something Else
            </a> */}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LandingPage;
