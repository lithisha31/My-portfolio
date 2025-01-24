import { PROJECTS } from "../content";
import { motion } from "framer-motion";

export default function Projects(){
    return(
        <div className="flex flex-col place-items-center p-4 mb-2">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0}}
                initial={{ opacity: 0, y: -100}}
                transition={{duration : 0.5}}
                className="text-3xl text-white">Projects
            </motion.h1>
            <div>
                    {PROJECTS.map((project,id)=>(
                        <motion.div
                            whileInView={{ opacity: 1, x: 0}}
                            initial={{ opacity: 0, x: 100}}
                            transition={{duration : 1}}>
                            <div key={id} className="text-xl text-white mb-1 mt-3">{project.title}</div>
                            <div key={id} className="text-[12px] text-white mb-2">{project.desc}</div>
                            {project.tools.map((tool,i) => (
                                <span className="mr-2 mb-5 rounded bg-stone-900 p-2 text-[10px] font-medium text-stone-300" key={i}>{tool}</span>
                            ))}
                        </motion.div>
                    )
                )}
            </div>
        </div>
    )
}