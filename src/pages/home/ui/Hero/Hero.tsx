import { Button } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import spaceWalkingImage from "@/shared/assets/img/hero/space-walking.webp";
import animakidAvatar from "@/shared/assets/img/hero/animakid-avatar.webp";
import clsx from "clsx";
import s from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={s.hero}>
      <div className={clsx("container", s.hero__container)}>
        <h1 className={s.hero__title}>Discover digital art & Collect NFTs</h1>
        <p className={s.hero__description}>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <Button
          type="button"
          size="secondary"
          variant="filled"
          className={s.hero__button}
          icon={<Icon name="rocket" width={20} height={20} />}
        >
          Get Started
        </Button>
        <ul className={s.hero__statsList}>
          <li className={s.hero__statItem}>
            <p className={s.hero__statValue}>240k+</p>
            <p className={s.hero__statLabel}>Total Sale</p>
          </li>
          <li className={s.hero__statItem}>
            <p className={s.hero__statValue}>100k+</p>
            <p className={s.hero__statLabel}>Auctions</p>
          </li>
          <li className={s.hero__statItem}>
            <p className={s.hero__statValue}>240k+</p>
            <p className={s.hero__statLabel}>Artists</p>
          </li>
        </ul>
        <article className={s.hero__nftCard}>
          <img
            src={spaceWalkingImage}
            alt="An astronaut exploring a surreal cosmic landscape"
            className={s.hero__nftImg}
            width={510}
            height={401}
          />
          <div className={s.hero__nftInfo}>
            <h2 className={s.hero__nftTitle}>Space Walking</h2>
            <div className={s.hero__creator}>
              <img
                src={animakidAvatar}
                alt="Image Avatar"
                className={s.hero__creatorAvatar}
                width={24}
                height={24}
              />
              <span>Animakid</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
