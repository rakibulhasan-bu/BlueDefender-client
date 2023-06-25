import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const [reqText, setReqText] = useState("orders");
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://blue-defender-server.vercel.app/${reqText}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [reqText]);
  return (
    <div className="container mx-auto py-8">
      <div
        onClick={handleNavigate}
        className="flex items-center gap-1 font-medium cursor-pointer"
      >
        <AiOutlineArrowLeft />
        Back to home page
      </div>
      <div className="flex pt-6 items-center justify-between max-w-lg mx-auto">
        <h2
          onClick={() => setReqText("orders")}
          className={`bg-gray-200 px-4 py-1 rounded-md cursor-pointer ${
            reqText === "orders" ? "selected" : ""
          }`}
        >
          All Orders
        </h2>
        <h2
          onClick={() => setReqText("expressOrders")}
          className={`bg-gray-200 px-4 py-1 rounded-md cursor-pointer ${
            reqText === "expressOrders" ? "selected" : ""
          }`}
        >
          Express Delivery
        </h2>
        <h2
          onClick={() => setReqText("regularOrders")}
          className={`bg-gray-200 px-4 py-1 rounded-md cursor-pointer ${
            reqText === "regularOrders" ? "selected" : ""
          }`}
        >
          Regular Delivery
        </h2>
      </div>
      <div className="overflow-hidden border my-8 border-gray-200 dark:border-gray-700 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          {/* table header  */}
          <thead className="bg-gray-50 ">
            <tr>
              <th className="py-3 pl-8 text-start font-normal text-gray-600">
                #
              </th>
              <th
                scope="col"
                className="py-3 pl-8 text-start font-normal text-gray-600"
              >
                <p>Product Name</p>
              </th>

              <th
                scope="col"
                className="px-8 py-3 text-left font-normal text-gray-600"
              >
                <p>Product image</p>
              </th>

              <th
                scope="col"
                className="px-12 py-3 text-left font-normal text-gray-600"
              >
                <p>Delivery Option</p>
              </th>
            </tr>
          </thead>
          {/* table body here  */}
          <tbody className="divide-y divide-gray-200 bg-white">
            {orders &&
              orders.map((order, i) => {
                return (
                  <tr key={order._id}>
                    {/* seller name document here  */}
                    <td className="whitespace-nowrap py-4 pl-8 font-medium text-gray-700">
                      {i + 1}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-10 text-gray-700">
                      <h2 className="text-gray-800">{order.productName}</h2>
                    </td>
                    {/* toy name document here  */}
                    <td className="whitespace-nowrap px-8 py-4 text-gray-600">
                      <img
                        className="w-16 h-16 object-cover rounded-md border"
                        src={order?.imageUrl}
                        alt=""
                      />
                    </td>
                    {/* sub category document here  */}
                    <td className="whitespace-nowrap px-12 py-4 text-gray-600">
                      {order.status}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
