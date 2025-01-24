import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const Reveal = ({children,delay=0.25 ,left,right,down}) => {
    const ref = useRef(null)
    const isInView=useInView(ref,{once:true})
    const mainControls=useAnimation()
    useEffect(()=>{
        if (isInView) {
                mainControls.start("visible");
        }
    },[isInView])
    return ( 
    <div ref={ref} style={{position:"relative",overflow:"hidden"}}>
        <motion.div
        variants={{
             hidden:left?{filter:"blur(10px)",opacity:0,x:75}:right?{filter:"blur(10px)",opacity:0,x:-75}:down?{filter:"blur(10px)",opacity:0,y:"-100%"}:{filter:"blur(10px)",opacity:0,y:75},
            visible:{filter:"blur(0px)",opacity:1,y:0,x:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.7, delay:delay,ease: [0, 0.71, 0.2, 1.01]}}
        >
            {children}
        </motion.div>
    </div> );
}
 
export default Reveal;