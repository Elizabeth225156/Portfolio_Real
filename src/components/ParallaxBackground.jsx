import {motion, useScroll, useSpring, useTransform} from "motion/react";

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50 });
    const mountainFar = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const mountainClose = useTransform(x, [0, 0.5], ["0%", "-20%"]);
    const ground = useTransform(x, [0, 0.5], ["0%", "30%"]);

    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">
                <div className="absolute inset-0 w-full h-screen -z-50"
                style={{
                    backgroundImage:`url(${import.meta.env.BASE_URL}assets/bgBack.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    }}
                />
                <motion.div className="absolute inset-0 -z-40"
                style={{
                    backgroundImage:`url(${import.meta.env.BASE_URL}assets/bgMiddle.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: mountainFar,
                    }}
                />
                <motion.div className="absolute inset-0 -z-30"
                style={{
                    backgroundImage:`url(${import.meta.env.BASE_URL}assets/bgFront.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    x: mountainClose,
                    }}
                />
            </div>
        </section>
    );
}

export default ParallaxBackground;