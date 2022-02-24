import { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/styles/_base.scss'
import 'locomotive-scroll/src/styles/_scrollbar.scss'

gsap.registerPlugin(ScrollTrigger);
export default function useLocoScroll(){
    useEffect(() => {
        let locoScroll: any = null;
        const scrollEl = document.querySelector(".rd-main--container");

        locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: "is-reveal",
        });

        locoScroll.on("scroll", () => {
            ScrollTrigger.update();
        });

        ScrollTrigger.scrollerProxy(scrollEl, {
            scrollTop(value) {
                if (locoScroll) {
                return arguments.length
                    ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.y;
                }
                return null;
            },
            scrollLeft(value) {
                if (locoScroll) {
                return arguments.length
                    ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.x;
                }
                return null;
            },
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
        });

        const lsUpdate = () => {
            if (locoScroll) {
                locoScroll.update();
            }
        };

        ScrollTrigger.addEventListener("refresh", lsUpdate);
        ScrollTrigger.refresh();

        return () => {
        if (locoScroll) {
            ScrollTrigger.removeEventListener("refresh", lsUpdate);
            locoScroll.destroy();
            locoScroll = null;
            console.log("Kill", locoScroll);
        }
        };
    }, []);
}