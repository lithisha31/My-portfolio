import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Navbar(){
    return (
        <div className="flex justify-between p-4 place-items-center lg:p-[25px]">
            <div>
                <h1 className="text-white text-3xl font-bold">LM</h1>
            </div>
            <ul className="text-white text-[20px] flex cursor-pointer gap-2 lg:gap-4">
                <li><a href="https://www.linkedin.com/in/lithisha-mandappa-2b99791a3/" target="_blank"><FaLinkedinIn /></a></li>
                <li><a href="https://github.com/lithisha31/React" target="_blank"><FaGithub /></a></li>
                <li><a href="mailto:mandappalithisha@gmail.com"><CiMail /></a></li>
            </ul>
        </div>
    )
}