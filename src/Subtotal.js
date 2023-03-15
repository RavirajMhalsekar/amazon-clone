import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items ): &#8377;{" "}
        <strong>{`${getBasketTotal(basket)}`}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This Order Contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
