import React, { Fragment, useState } from 'react'
import { Container } from 'react-bootstrap'
import { ArrowDownSvg, LogoSvg } from '../svg/Svg'
import useHostname from '../Provider/HostnameProvider';
import { useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {

    const originalUrl = useHostname();

    const [Login, setLogin] = useState(false);
    const [ToogleProfileMenu, setToogleProfileMenu] = useState(false);

    const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);

    const [StatusModal, setStatusModal] = useState("Login");
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true);
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')

        if (isLoggedIn) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    }, [])


    return (
        <Fragment>
            <div className={"fixed w-full bg-white z-[90] pt-[80px] pb-4 transition-all duration-300 shadow-[0px_20px_50px_#00000024] " + (ToogleMenuResponsive ? "top-0" : "-top-[100vh]")}>
                <Container className='h-full'>
                    <ul className='list-none p-0 m-0 flex items-center flex-wrap gap-4 text__16 w-full'>
                        <li className='w-full'>
                            <Link href="/" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-Mblack'>Home</Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/agents" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-Mblack'>Agents</Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/blog" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-Mblack'>Blog</Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/about" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-Mblack'>About us</Link>
                        </li>
                    </ul>
                </Container>
            </div>

            <div className={'w-full inline-block py-4 fixed z-[99] left-0 top-0 bg-white'}>
                <Container>
                    <div className="flex items-center justify-between relative">
                        <Link href="/" className='absolute left-1/2 lg:left-auto top-1/2 lg:top-auto -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0 flex items-center gap-2 lg:relative z-[1]'>
                            <LogoSvg classData={"w-[24px] md:w-[32px]"} />
                            <h5 className={'font-medium text__20 '}>Cluster</h5>
                        </Link>

                        <div className="hidden lg:flex justify-center items-center gap-[3rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                            <Link href="/" className={'text__16 text-Mblack'}>Home</Link>
                            <Link href="/agents" className={'text__16 text-Mblack'}>Agents</Link>
                            <Link href="/blog" className={'text__16 text-Mblack'}>Blog</Link>
                            <Link href="/contact" className={'text__16 text-Mblack'}>Contact us</Link>
                            <Link href="/about" className={'text__16 text-Mblack'}>About us</Link>
                        </div>

                        <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={"relative px-1 py-1 barIcon w-[30px] h-[30px] cursor-pointer lg:hidden " + (ToogleMenuResponsive ? "active" : "")}>
                            <div className={"bg-Mblack"}></div>
                            <div className={"bg-Mblack"}></div>
                            <div className={"bg-Mblack"}></div>
                        </div>

                        {
                            !Login ? <div onClick={() => {
                                setShow(true);
                                setStatusModal("Login");
                            }} className={'cursor-pointer text__14 font-medium text-Mblack relative z-[1]'}>Log In</div> : <div className="relative z-[1]">
                                <img src={originalUrl + "/images/profile-circle.svg"} className='cursor-pointer' onClick={() => setToogleProfileMenu(!ToogleProfileMenu)} alt="" />

                                <div className={"absolute z-[30] bg-white right-0 w-[226px] flex flex-wrap text__16 transition-all duration-300 " + (ToogleProfileMenu ? "top-[calc(100%_+_1rem)] opacity-100 pointer-events-auto" : "top-[300%] opacity-0 pointer-events-none")}>
                                    <Link href="/property/me" className='flex w-full items-center gap-2 p-4'>
                                        <img src={originalUrl + "/images/sa (1).svg"} alt="" />
                                        <span>My Properties</span>
                                    </Link>
                                    <Link href="/saved/searches" className='flex w-full items-center gap-2 p-4'>
                                        <img src={originalUrl + "/images/sa (2).svg"} alt="" />
                                        <span>Saved Searches</span>
                                    </Link>
                                    <Link href="/setting" className='flex w-full items-center gap-2 p-4'>
                                        <img src={originalUrl + "/images/sa (3).svg"} alt="" />
                                        <span>Settings</span>
                                    </Link>
                                    <div onClick={() => {
                                        localStorage.removeItem('isLoggedIn');
                                        setLogin(false);
                                        setToogleProfileMenu(false);
                                    }} className='cursor-pointer flex w-full items-center gap-2 p-4'>
                                        <img src={originalUrl + "/images/sa (4).svg"} alt="" />
                                        <span>Log out</span>
                                    </div>
                                </div>
                            </div>
                        }



                    </div>
                </Container>
            </div>

            {
                Login ? <div onClick={() => setToogleProfileMenu(!ToogleProfileMenu)} className={"fixed w-full h-screen left-0 top-0 z-[20] bg-[#171717] transition-all duration-300 " + (ToogleProfileMenu ? "opacity-30 pointer-events-auto" : "opacity-0 pointer-events-none")}></div> : ""
            }

        </Fragment>
    )
}

export default Navbar