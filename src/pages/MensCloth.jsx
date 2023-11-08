import CardProduct from "../components/CardProduct";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CATEGORY = `men's clothing`;

const MensCloth = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const allProducts = useSelector((state) =>
    state.products.products.length > 0
      ? state.products.products
      : JSON.parse(localStorage.getItem("allProducts"))
  );

  const handleClick = (id) => {
    navigate(`/${id}`);
  };

  const filterProductsByCategory = () => {
    const filteredProducts = allProducts.filter(
      (product) => product.category === CATEGORY
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    filterProductsByCategory();
  }, []);

  return (
    <div className="w-full p-4 md:p-4 space-y-8 md:space-y-16">
      <h1 className="text-xl font-semibold text-gray-600">
        Men's Cloth Products
      </h1>
      <Slider {...settings}>
        {products.map((product, idx) => {
          return (
            <div key={idx}>
              <CardProduct
                key={product.id}
                category={product.category}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                id={product.id}
                stock={product.stock}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MensCloth;
