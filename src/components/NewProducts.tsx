import React from "react";
import ProductCard from "./ProductCard";

const ProductsData = [
  {
    img: "/nikeshirt.jpg",
    title: "Boys T-shirt",
    desc: "Nike Black T-shirt for Men",
    rating: 4,
    price: "45.00",
},
{
    img: "/girlst-shirt.jpeg",
    title: "Girls T-shirt",
    desc: "Pink R-Neck T-shirt for Women",
    rating: 3,
    price: "30.00",
},
{
  img: "/wristwatch.jpeg",
  title: "Geneva-wrist-watch",
  desc: "Geneva Leather Analogue Quartz Wrist Watch",
  rating: 4,
  price: "40.00",
},
{
    img: "/valentinoheels.jpeg",
    title: "Valentino-heels",
    desc: "Nude Classy Valentino heels for Women",
    rating: 5,
    price: "120.00",
},
{
    img: "/handbag.jpeg",
    title: "Louis-Vuitton",
    desc: "Louis Vuitton Stylish Handbag for Women",
    rating: 4,
    price: "110.00",
},
{
    img: "/sunglasses.jpeg",
    title: "Sun-glasses",
    desc: "Luxurious Purple Sun Glasses for Women",
    rating: 4,
    price: "30.00",
},
{
  img: "/runningshoes.jpeg",
  title: "Nike Mens Free",
  desc: "Blue Lagoon/Bright Crimson Running Shoes",
  rating: 4,
  price: "60.00",
},
{
    img: "/crystalnecklace.jpeg",
    title: "Crystal Necklace",
    desc: "Glamorous Silver Crystal Necklace for Women",
    rating: 4,
    price: "60.00",
  },

];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4"> New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {ProductsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
