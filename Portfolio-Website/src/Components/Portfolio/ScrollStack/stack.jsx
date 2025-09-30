import styles from './style.module.scss';
import { useTransform, motion, useScroll} from 'framer-motion'
import { useRef, useEffect } from 'react'
import LiveStats from '../LiveStats/LiveStats';
import Experience from '../Experience/Experience'

const Stack = () => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const opacity = useTransform(scrollYProgress, [0, .01, .98, 1], [0, 1, 1, 0]);
    const title = useTransform(
        scrollYProgress,
        [0, 0.39, 0.90, 1],
        ["", "Experience", "Live Stats", "Portfolio"]
    );

    useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log('Scroll Progress:', latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);


    
    return (

        <div ref={container}>
            <motion.div style={{ opacity }} className={styles.stacktitle}>
                <motion.h1>{title}</motion.h1>
            </motion.div>
            
            <Card index={1} progress={scrollYProgress}>
                <Experience/>
            </Card>

            <Card index={2} progress={scrollYProgress}>
                <LiveStats/>
            </Card>

            <Card index={3} progress={scrollYProgress}>
                <h1>Portfolio</h1>
            </Card>
        </div>

    )
}

export function Card({children, index, progress}) {
    const scale = useTransform(progress, [index * .25, 1], [1, 1 - ((3 - index) * 0.05)])
    return (
        <div className={styles.cardContainer}>
            <motion.div style={{scale, top: `calc(-10% + ${index * 55}px)`}} className={styles.card}>
                {children}
            </motion.div>
        </div>
    )
}

export default Stack