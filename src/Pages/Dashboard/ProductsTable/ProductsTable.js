import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProductsTable.css";

const ProductsTable = ({ product, index, deleteProduct }) => {
  const { _id, name, price, inStock, orderQuantity } = product;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>${price}.00</td>
      <td>{inStock} Pice</td>
      <td>{orderQuantity} Pice</td>
      <td>
        <button onClick={() => deleteProduct(_id)} className="remove-btn">
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </td>
    </tr>
  );
};

export default ProductsTable;
