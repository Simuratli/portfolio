import { Navbar, Footer, SocialMediaSidebar } from './components'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Home, About, Portfolio, Blog, BlogContent } from './view'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

function App() {
  const cursorState = useSelector((state: any) => state.cursorReducer)

  const ref = useRef(null);


  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  });

  let mouseXPosition: any = 0;
  let mouseYPosition: any = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }


  const variants = {
    default: {
      opacity: 1,
      height: 60,
      width: 60,
      border: "2px solid black",
      borderRadius: "50%",
      fontSize: "16px",
      backgroundColor: "transparent",
      x: mouseXPosition - 25,
      y: mouseYPosition - 25,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    project: {
      opacity: 1,
      backgroundColor: "black",
      color: "#fff",
      height: 80,
      width: 80,
      fontSize: "14px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    image: {
      opacity: 1,
      backgroundColor: "transparent",
      color: "#000",
      height: '250px',
      width: '250px',
      fontSize: "32px",
      x: mouseXPosition - 200,
      y: mouseYPosition - 150
    }

  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };



  return (
    <div className="App" >
      <div className="main__app__container">
        <BrowserRouter>
          <Navbar />
          <motion.div
            variants={variants}
            className="circle"
            animate={cursorState.cursorVariant}
            transition={spring}

          >
            <span className="cursorText">{cursorState.cursorText}</span>
            {cursorState.cursorImage !== "" && <img src={cursorState.cursorImage} alt="me" />}

          </motion.div>
          <SocialMediaSidebar />
          <div className="content">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Portfolio />} path="/portfolio" />
              <Route element={<Blog />} path="/blog" />
              <Route element={<BlogContent />} path="/blog/:id" />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
