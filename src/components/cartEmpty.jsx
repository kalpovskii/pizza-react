import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пуста <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы еще не заказывали пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейдите на главную страницу.
        </p>
        <Link className="button button--black" to="/">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
