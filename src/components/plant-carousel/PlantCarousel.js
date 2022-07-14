import "./PlantCarousel.css"
import {Grid} from "@mui/material";
import room from "../../media/images/room.jpg";
import {useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import square from "../../media/images/square.png";
import triangle from "../../media/images/triangle.png";
import circle from "../../media/images/circle.png";


export default function PlantCarousel() {

    const [index, setIndex] = useState(0);
    const [moveInForward, setMoveInForward] = useState(false);
    const [moveOutForward, setMoveOutForward] = useState(false);

    let slideForward = () => {
        setMoveOutForward(true);
    }

    let forward = () => {
        let newIndex = index + 1;
        if(newIndex >= elements.length) {
            newIndex = 0;
        }
        setIndex(newIndex);
    }

    let backward = () => {
        let newIndex = index - 1;
        if(newIndex < 0) {
            newIndex = elements.length - 1;
        }
        setIndex(newIndex);
    }

    let onAnimationEnd = () => {
        if(moveOutForward) {
            forward();
            setMoveOutForward(false);
            setMoveInForward(true);
        }
        else if(moveInForward) {
            setMoveInForward(false);
        }
    }

    let getClassName = () => {
        if(moveOutForward) return "slide-out-forward";
        return "slide-in-forward";
    }

    return (
        <div>
            <div style={{position: "relative",  textAlign: "center"}}>
                <img style={{width: "100%"}} src={room} alt={"room"}/>
                <div style={{ position: "absolute", top: "30%", width: "100%"}}>
                    <Grid container
                          align="center"
                          justify="center"
                          spacing={2}>
                        <Grid item xs={2}>
                            <ArrowBackIosIcon onClick={backward} className={"icon"}/>
                        </Grid>
                        <Grid item xs={8}>
                            <div className={getClassName()} onAnimationEnd={onAnimationEnd}>
                                <p className={"plant-text"}>{elements[index].text}</p>
                                <img src={elements[index].image} className={"plant-image"}/>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <ArrowForwardIosIcon onClick={slideForward} className={"icon"}/>
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
    }
]