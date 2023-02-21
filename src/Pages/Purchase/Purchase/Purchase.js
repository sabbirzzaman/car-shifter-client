import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Purchase.css";

const Purchase = () => {
  const { id } = useParams();

  const [{ email, displayName }] = useAuthState(auth);

  const { data, isLoading } = useQuery("part", () =>
    axios.get(`https://white-rabbit-tutu.cyclic.app/parts/${id}`)
  );

  const { register, handleSubmit, reset } = useForm();

  if (isLoading) {
    return;
  }

  const { _id, name, image, description, price, orderQuantity, inStock } =
    data.data;

  const onSubmit = (data) => {
    if (
      parseInt(data.quantity) <= parseInt(inStock) &&
      parseInt(data.quantity) >= parseInt(orderQuantity)
    ) {
      const orders = {
        productId: _id,
        productName: name,
        price,
        image,
        ...data,
      };

      axios
        .post("https://white-rabbit-tutu.cyclic.app/orders", orders, {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((result) => {
          if (result?.data?.acknowledged) {
            reset();
            toast.success(
              "Product Added To My Cart. For Payment please Check Out Dashboard > My Orders"
            );
          }
        })
        .catch((err) => {
          if (err.response.status === 403 || err.response.status === 401) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            toast.error("Login Expired");
          }
        });
    }
  };

  return (
    <section className="purchase-section">
      <div className="container">
        <div className="purchase-item">
          <h3>{name}</h3>
          <div className="purchase-image">
            <img src={image} alt={name} />
          </div>
          <div className="purchase-info">
            <div className="info">
              <h5>In Stock</h5>
              <h3>{inStock}</h3>
            </div>
            <div className="info">
              <h5>Minimum Order</h5>
              <h3>{orderQuantity} Pice</h3>
            </div>
            <div className="info">
              <h5>Price</h5>
              <h3>${price}.00</h3>
            </div>
          </div>
          <div className="additional-details">
            <h4>Additional Details:</h4>
            {description}
          </div>
        </div>

        <div className="form-container">
          <h3>Order Information</h3>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="field-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                id="name"
                value={displayName || ""}
                {...register("name")}
                required
                readOnly
              />
            </div>

            <div className="field-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email || ""}
                {...register("email")}
                required
                readOnly
              />
            </div>

            <div className="field-group">
              <label htmlFor="address">
                Address <span className="required">*</span>
              </label>
              <input
                id="address"
                placeholder="Your Address"
                {...register("address")}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="phone">
                Phone <span className="required">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
                {...register("phone")}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="quantity">
                Order Quantity <span className="required">*</span>
              </label>
              <input
                id="quantity"
                type="number"
                min={orderQuantity}
                max={inStock}
                step="100"
                defaultValue={orderQuantity}
                {...register("quantity")}
                required
              />
            </div>

            <input className="btn" type="submit" value="Purchase Now" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
