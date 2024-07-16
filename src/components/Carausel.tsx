"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowButtons";
import { DotButton, useDotButton } from "./DotButton";
import MockupImage from "./MockupImage";
import Marquee from "react-fast-marquee";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const TWEEN_FACTOR_BASE = 0.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type slideObj = {
  name: string;
  images: string[];
  description: string;
  link?: string;
  github?: string;
  technologies: string[];
};

type PropType = {
  slides: slideObj[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex } = useDotButton(emblaApi);
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla  min-w-full gap-6 flex flex-col items-center">
      <div className="embla__viewport  w-full min-h-fit" ref={emblaRef}>
        <div className="embla__container w-full  h-full">
          {slides.map((data, index) => (
            <div
              className="embla__slide borderflex items-center justify-center text-textPrimary"
              key={index}
            >
              <div className="embla__slide__number border-x-2 flex flex-col border-textSecondary/20 min-w-full min-h-full">
                <div className="w-full relative overflow-hidden">
                  <Marquee play={selectedIndex === index}>
                    {data?.images?.map((img, i) => (
                      <MockupImage
                        key={i}
                        src={img || "/mockup1.avif"}
                        alt="project"
                      />
                    ))}
                  </Marquee>
                  {/* <BoundaryFade dark /> */}
                </div>
                <div className="w-full relative overflow-hidden min-h-fit">
                  <div className="p-5 min-h-full flex flex-col ">
                    <div className="flex justify-between">
                      <h1 className="text-2xl  font-semibold text-textPrimary">
                        <a href={data?.link} target="_blank" rel="noreferrer">
                          {data?.name}
                        </a>
                      </h1>
                      <div className="flex gap-5">
                        {data?.github && (
                          <a
                            href={data?.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github className="cursor-pointer" />
                          </a>
                        )}
                        {data?.link && (
                          <a href={data?.link} target="_blank" rel="noreferrer">
                            <ExternalLink className="cursor-pointer" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-textSecondary text-sm mt-2 w-[90%]">
                      {data?.description}
                    </p>
                    <pre className="text-textPrimary mt-5 text-sm font-semibold text-wrap">
                      {data?.technologies?.join(" • ")}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="flex gap-14 text-textPrimary mt-5">
          <ArrowRight
            onClick={onPrevButtonClick}
            className="rotate-180 cursor-pointer"
          />
          <ArrowRight onClick={onNextButtonClick} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
