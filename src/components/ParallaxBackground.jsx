import {motion, useScroll, useSpring, useTransform} from "motion/react";

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50 });
    const mountainFar = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const mountainClose = useTransform(x, [0, 0.5], ["0%", "-20%"]);
    const ground = useTransform(x, [0, 0.5], ["0%", "30%"]);
    //const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">
                {/* Background Sky */}
                <div className="absolute inset-0 w-full h-screen -z-50"
                style={{
                    backgroundImage:"url(/assets/bgBack.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    }}
                />
                {/* LAYER 2 */}
                <motion.div className="absolute inset-0 -z-40"
                style={{
                    backgroundImage:"url(/assets/bgMiddle.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: mountainFar,
                    }}
                />
                {/* LAYER 3 */}
                <motion.div className="absolute inset-0 -z-30"
                style={{
                    backgroundImage:"url(/assets/bgFront.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    x: mountainClose,
                    }}
                />
                {/* LAYER 4 */}
                <motion.div className="absolute inset-0 -z-210"
                style={{
                    backgroundImage:"url(/assets/bgGround.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: ground,
                    }}
                />
                {/* LAYER 5
                <motion.div className="absolute inset-0 -z-10"
                style={{
                    backgroundImage:"url(/assets/background.jpg)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: mountain1Y,
                    }}
                /> */}
            </div>
        </section>
    );
}

export default ParallaxBackground;