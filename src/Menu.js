import React from "react";

const Menu = ({ menuItem }) => {
  return (
    <div className="section-center">
      {menuItem.map((item) => {
        const { id, title, price, desc, img } = item;
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="itme-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
