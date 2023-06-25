import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthProvider } from "../provider/ContextProvider";

const Products = () => {
  const { user } = useContext(AuthProvider);
  console.log(user);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://blue-defender-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleBuy = (product) => {
    const { name, imageUrl } = product;

    Swal.fire({
      title: "Please choose one Shipment option",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Express Delivery",
      denyButtonText: `Regular Delivery`,
    }).then((result) => {
      if (result.isConfirmed) {
        const createDoc = {
          status: "Express Delivery",
          productName: name,
          imageUrl: imageUrl,
        };
        fetch("https://blue-defender-server.vercel.app/orders", {
          method: "PUT",
          body: JSON.stringify(createDoc),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        Swal.fire("Express Delivery Confirmed!", "", "success");
      } else if (result.isDenied) {
        const createDoc = {
          status: "Regular Delivery",
          productName: name,
          imageUrl: imageUrl,
        };
        fetch("https://blue-defender-server.vercel.app/orders", {
          method: "PUT",
          body: JSON.stringify(createDoc),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        Swal.fire("Regular Delivery Confirmed!", "", "success");
      }
    });
  };
  return (
    <div id="product" className="container mx-auto py-12">
      <h2 className="text-4xl text-center max-w-lg pb-2 mx-auto font-bold text-gray-800">
        Explore Our Collection of Anti Blue Ray Glasses
      </h2>
      <h2 className="text-xl text-gray-700 text-center">
        Protect Your Eyes and Enhance Your Style with Our Premium Selection
      </h2>
      <div className="py-12 flex flex-wrap items-center gap-12">
        {products.map((product, i) => {
          return (
            <div
              key={i}
              className="max-w-[280px] rounded-lg shadow hover:shadow-xl border border-gray-300"
            >
              <img
                className="rounded-t-lg h-48 w-[280px] object-cover"
                src={product?.imageUrl}
                alt=""
              />
              <p className="py-1 text-lg font-medium px-4">{product?.name}</p>
              <p className="pb-1 text-lg font-medium px-4">
                $ {product?.price}
              </p>
              <div className="flex justify-center items-center pt-2 pb-4 text-white">
                <button
                  onClick={() => handleBuy(product)}
                  className="bg-blue-500 font-medium py-1 px-4 rounded-lg hover:bg-blue-700"
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
