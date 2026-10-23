import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className={s.home__hero}>
      <h1 className={s.home__title}>
        Explore the world of
        <span> unique NFTs</span>
      </h1>
    </section>
  );
};

export default HomePage;
