import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "./Wrapper";
import "./hero.css";
import Hero1 from "../../assets/Gymhero1.png";
import Hero2 from "../../assets/gymhero2.jpg";
import Hero3 from "../../assets/gymhero3.jpg";


export default function BasicSlider() {
    return (
      <HeroSlider
        height={"80vh"}
        autoplay
        controller={{
          initialSlide: 2,
          slidingDuration: 600,
          slidingDelay: 200,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide)
        }}
      >
        <Overlay>
          <Wrapper>
           <h1 className="Hero-Text">Power Lifting Gym Melbourne</h1>
          </Wrapper>
        </Overlay>
  
        <Slide className="Hero-slides"
          shouldRenderMask
          label="Weight Room"
          background={{
            backgroundImageSrc: Hero3
          }}
        />
  
        <Slide className="Hero-slides"
          shouldRenderMask
          label="Power Lifting Room"
          background={{
            backgroundImageSrc: Hero1
          }}
        />
  
        <Slide className="Hero-slides"
          shouldRenderMask
          label="Whole Gym"
          background={{
            backgroundImageSrc: Hero2
          }}
        />
  
        <MenuNav />
      </HeroSlider>
    );
  }
  
/* sourced from the hero-slider demo https://github.com/rmolinamir/hero-slider#readme*/