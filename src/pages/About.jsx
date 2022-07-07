import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="invicible"></div>
        <div className="about__img">
          <div className="about__inner">
            <h1>О NISHMAN</h1>
          </div>
        </div>
        <div className="about__white"></div>
        <div className="about__main">
          <div className="about__left">
            <span className="about__main__text1">
              Компания Asil Group Cosmetic была основана в 2016 году в <br />{" "}
              Турции (Стамбул). Создав команду опытных специалистов,
              <br /> которые сделали прорыв в области косметической <br />{" "}
              промышленности в Турции, Asil Group Cosmetic за <br /> довольно
              короткий срок приняла стабильную позицию на <br /> рынке
              профессиональной косметики среди крупных производителей.
            </span>
            <video
              controls="controls"
              autoPlay
              className="about__main__video"
              src="https://nishman.ru/wp-content/uploads/2021/02/Nishman_Promo.mp4"
            ></video>
          </div>
          <div className="about__right">
            <img
              style={{ maxWidth: "300px", maxHeight: "200px" }}
              src="https://nishman.ru/wp-content/uploads/2020/11/Nishman_White.png"
              alt=""
            />
            <span className="about__main__text2">
              Косметика для мужчин Nishman входит в пакет брендов <br />{" "}
              компании Asil Group Cosmetic. Компания уделяет особое
              <br /> внимание выбору упаковки, безопасности и качеству
              <br /> продукта, которые способны перевернуть взгляд на
              <br /> косметику. Asil Group регулярно экспортирует продукцию
              <br /> своих брендов более чем в 40 стран мира. Девиз
              <br /> компании: «Мы не остановимся, пока о нас не услышит
              <br /> весь мир».
            </span>
            <img
              style={{
                maxWidth: "300px",
                maxHeight: "200px",
                marginLeft: "100px",
              }}
              src="https://nishman.ru/wp-content/uploads/2020/11/Nishman_White_1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
