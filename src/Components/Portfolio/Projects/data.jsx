import AOK from '../../../assets/AOK_Metal.png';
import ATT from '../../../assets/AAT.png';
import SCHED from '../../../assets/SCHED.png';
import Portfolio from '../../../assets/Portfolio.png';
import { SiReact, SiVite, SiMui, SiLeetcode, SiFramer  } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub, FaFigma } from "react-icons/fa";

export const portfolio = [
    {
        img: AOK,
        title: "A.OK Metal Fabrication",
        description: <span style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                        Designed using <FaFigma/> Figma, Built on <SiFramer/> Framer using custom Components and Layouts.
                     </span>,
        link: "https://aokmetal.framer.website/"
    },
    {
        img: ATT,
        title: "Australian Agriculture Training",
        description: <span style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                        Designed using <FaFigma/> Figma, Built on <SiFramer/> Framer using custom Components and Layouts.
                     </span>,
        link: "https://aussieagtraining.framer.website/"
    },
    {
        img: Portfolio,
        title: "My Portfolio",
        description: <span style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                        <SiReact/> React + <SiVite/> Vite, <TbBrandFramerMotion/> Framer Motion, <SiMui/> Mui, <FaGithub/> GitHub & <SiLeetcode/> LeetCode 3rd Party API's
                     </span>,
        link: "https://github.com/Jdaunt0/Portfolio-Website"
    },
]