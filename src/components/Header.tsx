import logo from "../assets/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

interface Props {
    pages: NavItem[]
}

const Header = ({ pages }: Props) => {

    const [showNav, setShowNav] = useState(false)

    const toggleNav = () => {
        setShowNav(!showNav)
    }

    return (
        <div>
            <div
                className="w-full flex justify-between items-center p-10 max-md:p-4 max-md:flex-col gap-6"
            >
                <div className="flex justify-between w-full items-center">
                    <img src={logo.src} alt="logo" width={500} className="max-md:w-60" />

                    {
                        !showNav ?
                            <AiOutlineMenu className="max-md:block hidden text-5xl cursor-pointer" onClick={toggleNav} />
                            : <AiOutlineClose className="max-md:block hidden text-5xl cursor-pointer" onClick={toggleNav} />
                    }
                </div>

                <a href="" className="btn btn-primary rounded-none text-2xl w-fit"
                >Donate Today</a>
            </div>
            <div className={`navbar bg-base-100 justify-center ${showNav ? "max-md:block" : "max-md:hidden"}`}>
                <ul
                    className={`menu menu-horizontal px-1 justify-evenly w-2/3 text-xl max-lg:w-full max-md:flex-col`}
                >
                    {
                        pages.map((page, index) => (
                            <li key={index}>
                                <a href={page.url}>{page.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>

    )
}

export default Header