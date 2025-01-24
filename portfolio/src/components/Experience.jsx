import { EXPERIENCE } from "../content";
import { motion } from "framer-motion";

export default function Experience(){
    return (
        <div>
            <div className="flex flex-col place-items-center">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0}}
                    initial={{ opacity: 0, y: -100}}
                    transition={{duration : 1}}
                    className="text-3xl text-white mt-2">Experience
                </motion.h2>
            </div>
            {EXPERIENCE.map((exp,i) => (
                <div className="flex flex-col p-4">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: -100}}
                        transition={{duration : 1}}
                        className="flex text-[12px] text-white mt-2 mb-2">
                        {exp.from_year} - {exp.to_year}
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: 100}}
                        transition={{duration : 1}}>
                        <div className="flex text-[16px] text-white place-items-center font-bold mb-2">
                            {exp.role} - {""}
                            <span className="text-sm text-stone-500 pl-2">{exp.organisation}</span>
                        </div>
                        <div>
                            {exp.technologies.map((tech,id) => (
                                <span className="text-[10px] text-stone-300 mr-2 rounded bg-stone-900 p-2">{tech}</span>
                                ))}
                        </div>  
                    </motion.div>                   
                </div>
            ))}
        </div>
    )
}