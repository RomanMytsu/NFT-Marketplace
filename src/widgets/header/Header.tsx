import { Link } from "react-router";
import { Icon } from "@/shared/ui/Icon/Icon";
import Logo from "@/shared/assets/icons/logo.svg";
import { useCallback, useEffect, useState } from "react";
import { MobileMenu } from "./ui/MobileMenu/MobileMenu";
import { NAVIGATION_LINKS } from "./model/navigationLinks";
import { Button } from "@/shared/ui/Button/Button";
import s from "./Header.module.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 835px)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };
    desktopMediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      desktopMediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);
  return (
    <>
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
            <nav className={s.header__nav} aria-label="Main navigation">
              {NAVIGATION_LINKS.map(({ label, to }) => (
                <Link key={to} to={to} className={s.header__navLink}>
                  {label}
                </Link>
              ))}
              <Button
                to="/sign-up"
                size="secondary"
                variant="filled"
                className={s.header__signUpButton}
                icon={<Icon name="user" width={20} height={20} />}
              >
                Sign Up
              </Button>
            </nav>
            <button
              type="button"
              className={s.header__mobileMenuButton}
              aria-label="Open navigation menu"
              aria-haspopup="dialog"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-dialog"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Icon name="burger-menu" width={24} height={24} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        links={NAVIGATION_LINKS}
      />
    </>
  );
};

export default Header;
