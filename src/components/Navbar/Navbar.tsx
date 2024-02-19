import React from "react";
import { Link, useLocation } from "react-router-dom";
import Star from "../../assets/star";
import { useNavbar } from "../../hooks/useNavbar";
import Logo from "../Logo";
import { Alert } from "../";
import { useStore } from "../../store";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { alertText, showAlert } = useStore();
  const { openNavbar, setOpenNavbar, NavURLs, setTransform } = useNavbar();
  const { pathname } = useLocation();
  const MotionLink = motion(Link);

  return (
    <nav className="navbar">
      <Star top={-50} right={-50} />
      <div className="navbar__content">
        <span className="navbar__borderDot"></span>
        <span className="navbar__borderDot"></span>
        <span className="navbar__borderDot"></span>
        <span className="navbar__borderDot"></span>
        <div className="navbar__logo">
          <Logo />
          {showAlert && <Alert text={alertText} />}
          <div
            onClick={() => {
              setOpenNavbar((prev) => !prev);
            }}
            className={`hamburger ${openNavbar && "open"}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <AnimatePresence>
          <div className="navbar__element__container">
            {NavURLs.map((link, index) => {
              const x = useMotionValue(0);
              const y = useMotionValue(0);
              return (
                <motion.div
                  key={index}
                  onPointerMove={(event) => {
                    const item = event.currentTarget;
                    setTransform(item, event, x, y);
                  }}
                  onPointerLeave={() => {
                    x.set(0);
                    y.set(0);
                  }}
                  style={{ x, y }}
                  className="navbar__element"
                >
                  <MotionLink to={link.link}>
                    <mark>{link.text}</mark>
                    {pathname === link.link ? (
                      <motion.div
                        transition={{ type: "spring" }}
                        layoutId="underline"
                        className="navbar__element__active"
                      ></motion.div>
                    ) : null}
                  </MotionLink>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
      <div className={`navbar__mobile ${openNavbar && "open"}`}>
        <div className="navbar__mobile__content">
          <Link
            onClick={() => {
              setOpenNavbar(false);
            }}
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => {
              setOpenNavbar(false);
            }}
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            onClick={() => {
              setOpenNavbar(false);
            }}
            to="/hire"
          >
            Hire me
          </Link>
        </div>
      </div>
      <Star left={-70} />
    </nav>
  );
};

export default Navbar;
