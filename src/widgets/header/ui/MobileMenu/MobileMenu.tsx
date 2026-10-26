import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { X } from "lucide-react";
import Logo from "@/shared/assets/icons/logo.svg";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Button } from "@/shared/ui/Button/Button";
import s from "./MobileMenu.module.scss";

type NavigationLink = {
  label: string;
  to: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  links: readonly NavigationLink[];
};

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const panelVariants: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1],
    },
  },
};

function MobileMenuLayer({ onClose, links }: Omit<MobileMenuProps, "isOpen">) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;

      if (previouslyFocusedElement?.isConnected) {
        previouslyFocusedElement.focus();
      }
    };
  }, []);

  return (
    <motion.div
      className={s.mobileMenu__backdrop}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        className={s.mobileMenu__panel}
        role="dialog"
        aria-modal="true"
        aria-label="NFT Marketplace navigation"
        variants={panelVariants}
      >
        <div className={s.mobileMenu__header}>
          <Link
            to="/"
            className={s.mobileMenu__logoLink}
            aria-label="NFT Marketplace home"
            onClick={onClose}
          >
            <img
              src={Logo}
              alt="NFT Marketplace"
              width={183}
              height={24}
              className={s.mobileMenu__logo}
            />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            className={s.mobileMenu__closeButton}
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        <nav className={s.mobileMenu__nav} aria-label="Main navigation">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={s.mobileMenu__navLink}
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
          <Button
            to="/sign-up"
            size="secondary"
            variant="filled"
            className={s.mobileMenu__signUpButton}
            icon={<Icon name="user" width={20} height={20} />}
            onClick={onClose}
          >
            Sign Up
          </Button>
        </nav>
      </motion.div>
    </motion.div>
  );
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <MobileMenuLayer key="mobile-menu" onClose={onClose} links={links} />
      )}
    </AnimatePresence>,
    document.body,
  );
}
