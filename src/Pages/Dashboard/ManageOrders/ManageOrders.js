import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { confirmAlert } from "react-confirm-alert";
import Loader from "../../Common/Loader/Loader";
import ManageOrderTable from "../ManageOrderTable/ManageOrderTable";
import "./ManageOrders.css";
import toast from "react-hot-toast";

const ManageOrders = () => {
  // get orders data
  const { data, isLoading, refetch } = useQuery("allOrders", () =>
    axios.get("https://white-rabbit-tutu.cyclic.app/order", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  // loading spinner
  if (isLoading) {
    return <Loader height="50vh"></Loader>;
  }

  const allOrders = data.data;

  // cancel order
  const handleItemDelete = (id) => {
    confirmAlert({
      title: "Confirm Order Cancel",
      message: "Are you sure you want to cancel this order?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`https://white-rabbit-tutu.cyclic.app/order?id=${id}`)
              .then((data) => {
                if (data?.data?.deletedCount > 0) {
                  refetch();
                  toast.success("Order cancel successfully!");
                }
              })
              .catch((err) => {
                toast.error("Failed to cancel order!");
              });
          },
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };

  const handleChangeStatus = (id) => {
    confirmAlert({
      title: "Confirm Shipped Order",
      message: "Are you sure you want to shipped this order?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const status = { status: "shipped" };
            axios
              .patch(
                `https://white-rabbit-tutu.cyclic.app/order/${id}`,
                status,
                {
                  headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                }
              )
              .then((data) => {
                if (data.data.acknowledged) {
                  refetch();
                  toast.success("Order shipped successfully!");
                }
              });
          },
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };

  return (
    <div className="table-container">
      <h3>Manage Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order, index) => (
            <ManageOrderTable
              key={order._id}
              order={order}
              index={index}
              deleteOrder={handleItemDelete}
              changeStatus={handleChangeStatus}
            ></ManageOrderTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
