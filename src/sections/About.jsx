import React , { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mtt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                        src="assets/aboutMeBackground.jpg"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Elizabeth</p>
                        <p className="subtext">My passion for astrophysics drives my interest in research and innovation.
                            I enjoy turning complex problems into practical solutions.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo"/>
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-4xl text-gray-500">Research. Build. Analyze.</p>
                        <Card style={{rotate:"75deg", top:"30%", left:"20%"}} text="Science" containerRef={grid2Container}/>
                        <Card style={{rotate:"-30deg", top:"60%", left:"45%"}} text="Data" containerRef={grid2Container}/>
                        <Card style={{rotate:"90deg", bottom:"30%", left:"70%"}} text="Designs" containerRef={grid2Container}/>
                        <Card style={{rotate:"-45deg", top:"55%", left:"0%"}} text="Problems" containerRef={grid2Container}/>
                        <Card style={{rotate:"20deg", top:"10%", left:"38%"}} text="Ideas" containerRef={grid2Container}/>
                        {/* <Card style={{rotate:"30deg", top:"70%", left:"70%"}} image="image/path/here" containerRef={grid2Container}/> */}
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[60%]">
                        <p className="headtext">Earth</p>
                        <p className="subtext">Idk what to put here yet as text.</p>
                    </div>
                    <figure className="absolute left-[30% top-10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">Have any question?</p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full inset-s-[50% md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About