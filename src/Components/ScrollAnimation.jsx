import { useScroll } from "framer-motion"

const ScrollAnimation = () => {

    const { scrollYProgress } = useScroll();
  return (
    <div style={{padding: '1.3rem' }}>
        <p></p>
    </div>
  )
}

export default ScrollAnimation