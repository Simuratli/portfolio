import { HeadingPropTypes } from './heading.types'
import React, { useState } from 'react'
import { motion } from "framer-motion";

const tabs = [
    { name: "Front-end", color: "#f00" },
    { name: "Code", color: "#b1f" },
    { name: "History", color: "#f90" },
    { name: "Books", color: "#0c0" }
];


function Heading({ title, haveCategory }: HeadingPropTypes) {
    const [selected, setSelected] = useState(0);
    const [formerColor, setFormerColor] = useState(tabs[0].color);




    return (
        <div className="head">
            <h1 className="head-title">{title}</h1>
            {
                haveCategory && tabs.map(({ name, color }, i) => (
                    <motion.div
                        style={tabStyle}
                        key={i}
                        initial={{
                            color: i === selected ? "#fff" : "#222"
                        }}
                        animate={{
                            color: i === selected ? "#fff" : "#222"
                        }}
                        // transition={{ duration }}
                        onTap={() => {
                            setFormerColor(tabs[selected].color);
                            setSelected(i);
                        }}
                    >
                        <span style={{ position: "relative", zIndex: 1 }}>
                            {name}
                        </span>
                        {i === selected && (
                            <motion.div
                                // style={selectionStyle}
                                layoutId="selected"
                                initial={{ backgroundColor: formerColor }}
                                animate={{ backgroundColor: color }}
                                // transition={{ duration }}
                            />
                        )}
                    </motion.div>
                ))
            }
        </div>
    )
}


const containerStyle = {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 6,
    display: "flex",
    alignContent: "flex-start",
    alignItems: "start",
    justifyContent: "start"
};

const tabStyle:any = {
    height: 30,
    position: "relative",
    padding: "3px 15px",
    margin: 0,
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: 700,
    color: "#222",
    cursor: "pointer"
};

const selectionStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 15,
    top: 0,
    left: 0
};


export default React.memo(Heading)