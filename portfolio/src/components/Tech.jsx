import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileSqlDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }

})


export default function Tech(){
    return (
        <div className="flex flex-col place-items-center gap-2 lg:gap-5 mb-4">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0}}
                initial={{ opacity: 0, y: -100}}
                transition={{duration : 1.5}}
                className="text-3xl text-white">Technologies
            </motion.h1>
            <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100}}
                transition={{duration : 1.5}}
                className="flex gap-2 lg:gap-3">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}>
                    <FaReact size={50} color="61DBFB"/>
                </motion.div>                
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}>
                    <FaJsSquare size={50} color="#F0DB4F" />
                </motion.div>               
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}>
                    <FaHtml5 size={50} color= "#f06529"/>
                </motion.div>              
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}>
                    <FaCss3 size={50} color="#264de4" />
                </motion.div>               
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}>
                    <RiTailwindCssFill size={50} color="#06b6d4"/>
                </motion.div>              
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)}>
                    <PiFileSqlDuotone size={50} color="white" />
                </motion.div>
            </motion.div>
        </div>
    )
}