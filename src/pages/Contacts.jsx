import React from "react";

const Contact = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="about__img">
          {" "}
          <div className="contacts__inner">
            <h1>КОНТАКТЫ</h1>
          </div>
        </div>
        <div className="contacts__info">
          <div className="contacts__text">
            <h1 className="contacts__text__title">НАШИ КОНТАКТЫ</h1>
            <hr className="contacts__line"></hr>
            <p> Представительство Nishman в Кыргызской Республике</p>
            <p>Адрес: КР, г. Бишкек, ул. Байтик-Баатыра 5б</p>
            <p>Почта: nishmankg@gmail.com</p>
          </div>
          <div className="contacts__logo">
            <img
              style={{ width: "250px", height: "160px" }}
              src="https://nishman.ru/wp-content/uploads/2020/11/Nishman_Logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
