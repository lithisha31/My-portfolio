import profilePic from "../assets/lithisha.png";
import Resume from "../assets/Lithisha_resume.pdf";
import { motion } from "framer-motion";

const containerVariants = {
    hidden : {
        opacity : 0,
        x : -100
    },
    visible : {
        opacity : 1,
        x : 0,
        transition : {
            duration : 0.5,
            staggerChildren : 0.5,
        }
    }
}

const childVariants = {
    hidden : {
        opacity : 0,
        x : -100
    },
    visible : {
        opacity : 1,
        x : 0,
        transition : {
            duration : 0.5
        }
    }
}

export default function Summary(){
    return(
        <div className="flex flex-col p-4 lg:flex-row place-items-center">
            <motion.img 
                className="border border-stone-900 rounded-lg h-30 w-25 lg:h-45 w-35"
                src={profilePic}
                alt="Lithisha"
                initial = {{ x: 100 , opacity: 0 }}
                animate = {{ x:0, opacity:1 }}
                transition = {{ duration: 1, delay: 1}} />
            <motion.div 
                initial= "hidden"
                animate= "visible"
                variants={containerVariants}
                className="flex flex-col text-white place-items-center justify-center p-4 gap-3">
                <motion.h1
                    variants={childVariants}
                    className="text-5xl lg:text-7xl">Lithisha Mandappa
                </motion.h1>
                <motion.h2
                    variants={childVariants}
                     className="text-2xl lg:text-4xl bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text tracking-tight text-transparent">Front End Developer
                </motion.h2>
                <motion.p
                    variants={childVariants}
                    className="text-sm tracking-tighter">Dynamic Application Developer with over 3 years of experience, specializing in front-end development using React.
                    Proficient in SQL, PL/SQL, VBCS, and Oracle Applications, with a strong foundation in both front-end and back-end technologies. Adept at designing user-friendly interfaces and optimizing performance for enhanced user experience. Passionate about front-end development, with a focus on building responsive, high-quality web applications, and committed to continuing professional growth in this field.
                </motion.p>
                <motion.a 
                    variants={childVariants}
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="h-10 w-25 text-black p-2 place-items-center justify-center bg-white rounded-3xl mb-2">Download Resume
                </motion.a>
            </motion.div>
        </div>
    )
}