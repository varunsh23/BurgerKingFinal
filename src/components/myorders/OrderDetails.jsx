import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address -</b>
            {"rf 134 fvvtsb"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name -</b>
            {"Varun Sharma"}
          </p>
          <p>
            <b>Phone -</b>
            {93563558232}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status -</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At -</b>
            {"14-04-2023"}
          </p>
          <p>
            <b>Delivered At -</b>
            {"15-04-2023"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method -</b>
            {"Online Payment"}
          </p>
          <p>
            <b>Payment Reference -</b>#{"ykdrymfhhndnm"}
          </p>
          <p>
            <b>Paid At -</b>
            {"15-04-2023"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total -</b>₹{1350}
          </p>
          <p>
            <b>Shipping Charges -</b>₹{250}
          </p>
          <p>
            <b>Tax Amount -</b>₹{200}
          </p>
          <p>
            <b>Total Amount -</b>₹{1800}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{8}</span> x <span>{320}</span>
            </div>
          </div>
          <div>
            <h4>Chicken Burger</h4>
            <div>
              <span>{12}</span> x <span>{240}</span>
            </div>
          </div>
          <div>
            <h4> Burger with Fries</h4>
            <div>
              <span>{11}</span> x <span>{450}</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>₹{1800}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
