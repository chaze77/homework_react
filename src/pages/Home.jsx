import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const Home = () => {
  const navigate = useNavigate();

  function hadnleList() {
    navigate("/list");
  }

  function handleContacts() {
    navigate("/contacts");
  }

  return (
    <section className="home">
      <div className="container">
        <div className="invicible"></div>
        <div className="home__img">
          <div className="home__title">
            <span style={{ color: "black" }}>NISHMAN.</span>
            <span style={{ color: "white" }}> LIVE</span>
            <span style={{ color: "#FFC11E" }}> IS DYNAMIC</span>{" "}
          </div>
          <div className="home__title_text">
            Профессиональная косметика для мужчин Nishman
          </div>
          <button className="home__btn" onClick={hadnleList}>
            СМОТРЕТЬ КАТАЛОГ
          </button>
        </div>
        <div className="home__content">
          <p className="home__content__text">
            Жизнь — это движение. Все в нашей жизни меняется постоянно. <br />
            Мы сами любим меняться, и, в первую очередь, это отражается на наших
            волосах <br />
            Nishman представляет лучшие продукты для тех, кому важно выглядеть
            всегда хорошо.
            <br /> Вы достойны только лучшего!
          </p>
        </div>
        <div className="home__footer">
          <p>CВЯЖИТЕСЬ С НАМИ, ЕСЛИ ВАМ ИНТЕРЕСНЫ ПРОДУКТЫ NISHMAN</p>
          <button className="home__footer__btn" onClick={handleContacts}>
            СВЯЗАТЬСЯ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
