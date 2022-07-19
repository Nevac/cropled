import {CSSTransition, SwitchTransition, TransitionGroup} from 'react-transition-group';
import "./PlantCarousel.css"
import {Grid} from "@mui/material";
import room from "../../media/images/room.jpg";
import {useEffect, useRef, useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import square from "../../media/images/square.png";
import triangle from "../../media/images/triangle.png";
import circle from "../../media/images/circle.png";
import React from "react";
import useInterval from "../util/useInterval";

export default function PlantCarousel() {

    const [slideRight, setSlideRight] = useState(true);
    const [index, setIndex] = useState(0);
    const timerMS = 5000;

    let forward = () => {
        reset();
        let newIndex = index + 1;
        if(newIndex >= elements.length) {
            newIndex = 0;
        }
        setSlideRight(true);
        setIndex(newIndex);
    }

    let backward = () => {
        reset();
        let newIndex = index - 1;
        if(newIndex < 0) {
            newIndex = elements.length - 1;
        }
        setSlideRight(false);
        setIndex(newIndex);
    }

    const [reset] = useInterval(forward, timerMS);

    return (
        <div className={"main"}>
            <img className={"background"} src={room} alt={"room"}/>
            <div className={"panel"}>
                <Grid container
                      align="center"
                      justify="center"
                      spacing={2}>
                    <Grid item xs={2}>
                        <ArrowBackIosIcon onClick={backward} className={"icon"}/>
                    </Grid>
                    <Grid item xs={8}>
                        <div className={"element-container"}>
                            <TransitionGroup component={null}
                                childFactory={child => React.cloneElement(child, { classNames: `slide-${slideRight ? 'right' : 'left'}` })}>
                                <CSSTransition key={index}
                                               addEndListener={(node, done) => {
                                                   node.addEventListener("transitionend", done, false);
                                               }}
                                >
                                    <div className={"element"}>
                                        <p className={"plant-text"}>{elements[index].text}</p>
                                        <img src={elements[index].image} className={"plant-image"}/>
                                    </div>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <ArrowForwardIosIcon onClick={forward} className={"icon"}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const elements = [
    {
        image: square,
        text: "American Squaris",
    },
    {
        image: triangle ,
        text: "Triangi Flower",
    },
    {
        image: circle,
        text: "Annual Circla",
    },
]