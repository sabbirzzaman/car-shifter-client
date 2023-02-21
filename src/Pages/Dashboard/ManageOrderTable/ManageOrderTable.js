import React from "react";
import "./ManageOrderTable.css";

const ManageOrderTable = ({ order }) => {
  const { productName, price, quantity, paid, status } = order;

  const totalPrice = parseInt(price) * parseInt(quantity);

  return (
    <tr>
      <td>{productName}</td>
      <td>{quantity} Pice</td>
      <td>${totalPrice}.00</td>
      <td>{!paid ? <p>Unpaid</p> : <p>{status ? "Shipped" : "Pending"}</p>}</td>
      <td>
        {!paid ? (
          <button className="cancel">Cancel</button>
        ) : (
          <>
            {!status ? (
              <button className="status">Approve</button>
            ) : (
              "Completed"
            )}
          </>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderTable;
