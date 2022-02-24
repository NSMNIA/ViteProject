import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/styles/_base.scss'
import 'locomotive-scroll/src/styles/_scrollbar.scss'

export default function useLocoScroll(){
    useEffect(() => {
        const scrollEl = document.querySelector(`.rd-main--container`);
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        })
    }, [])
}