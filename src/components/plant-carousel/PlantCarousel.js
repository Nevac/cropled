import {CSSTransition, SwitchTransition, TransitionGroup} from 'react-transition-group';
import "./PlantCarousel.css"
import {Grid} from "@mui/material";
import room from "../../media/images/room.jpg";
import {useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import square from "../../media/images/square.png";
import triangle from "../../media/images/triangle.png";
import circle from "../../media/images/circle.png";
import React from "react";

const duration = 300;

export default function PlantCarousel() {

    const [slideRight, setSlideRight] = useState(true);
    const [index, setIndex] = useState(0);

    let forward = () => {
        let newIndex = index + 1;
        if(newIndex >= elements.length) {
            newIndex = 0;
        }
        setSlideRight(true);
        setIndex(newIndex);
    }

    let backward = () => {
        let newIndex = index - 1;
        if(newIndex < 0) {
            newIndex = elements.length - 1;
        }
        setSlideRight(false);
        setIndex(newIndex);
    }

    return (
        <div>
            <div style={{position: "relative",  textAlign: "center", overflow: "hidden"}}>
                <img style={{width: "100%", zIndex: "-10"}} src={room} alt={"room"}/>
                <div style={{ position: "absolute", top: "30%", width: "100%"}}>
                    <Grid container
                          align="center"
                          justify="center"
                          spacing={2}>
                        <Grid item xs={2}>
                            <ArrowBackIosIcon onClick={backward} className={"icon"}/>
                        </Grid>
                        <Grid item xs={8}>
                            <div style={{display: "flex", position: "relative", justifyContent: "center"}}>
                                <TransitionGroup component={null}
                                    childFactory={child => React.cloneElement(child, { classNames: `slide-${slideRight ? 'right' : 'left'}` })}>
                                    <CSSTransition key={index}
                                                   addEndListener={(node, done) => {
                                                       node.addEventListener("transitionend", done, false);
                                                   }}
                                    >
                                        <div style={{position: "absolute"}}>
                                            <p className={"plant-text"}>{elements[index].text}</p>
                                            <img src={elements[index].image} className={"plant-image"}/>
                                        </div>
                                    </CSSTransition>
                                </TransitionGroup>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            {        console.log(index)}
                            <ArrowForwardIosIcon onClick={forward} className={"icon"}/>
                        </Grid>
                    </Grid>
                </div>
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