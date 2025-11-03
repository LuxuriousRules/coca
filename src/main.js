import './styles/index.scss'

import './modules/header.js'
import './modules/titlemain.js'



import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({duration: 2000, once: false,});

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

