import { Link } from "react-router";
import { Icon } from "@/shared/ui/Icon/Icon";
import Logo from "@/shared/assets/icons/logo.svg";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__navMenu}>
          <Link to="/" className={s.header__logoLink}>
            <img
              src={Logo}
              alt="Logo"
              width={243}
              height={32}
              className={s.header__iconLogo}
            />
          </Link>
          <nav className={s.header__nav}>
            <Link to="marketplace" className={s.header__navLink}>
              Marketplace
            </Link>
            <Link to="rankings" className={s.header__navLink}>
              Rankings
            </Link>
            <Link to="connect-wallet" className={s.header__navLink}>
              Connect a wallet
            </Link>
            <Link to="sign-up" className={s.header__signUpLink}>
              <Icon
                name="user"
                width={20}
                height={20}
                className={s.header__icon}
              />
              <span>Sign Up</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
