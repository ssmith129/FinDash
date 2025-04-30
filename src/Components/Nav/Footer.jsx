import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useHostname } from '../Provider/HostnameProvider';
import LogoSvg from '../svg/Svg';
import Link from 'next/link';


const Footer = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <section className='pb-[20px]'>
                <Container>
                    <div className="flex md:!flex-nowrap flex-wrap items-start justify-between">

                        <div className='flex items-center gap-2 w-full mb-6 md:mb-0'>
                            <LogoSvg classData={"w-[36px] md:w-[40px] lg:w-[48px]"} />
                            <h5 className={'font-medium text-[20px] lg:text-[24px] xl:text-[28px] '}>Cluster</h5>
                        </div>

                        <Row className='gap-y-6'>
                            <Col md={4} className="col-6">
                                <div className="w-[40px] lg:w-[46px] h-[40px] lg:h-[46px] rounded-full border !border-[rgba(11,11,11,0.21)] flex items-center justify-center mb-3">
                                    <h4 className='text__18'>01</h4>
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    <Link href="/" className='inline-block w-full'>Home</Link>
                                    <Link href="/about" className='inline-block w-full'>Blog</Link>
                                    <Link href="/resources" className='inline-block w-full'>Resources</Link>
                                    <Link href="/contact" className='inline-block w-full'>Contact Us</Link>
                                    <Link href="/agents" className='inline-block w-full'>Agencies</Link>
                                </div>
                            </Col>
                            <Col md={4} className="col-6">
                                <div className="w-[40px] lg:w-[46px] h-[40px] lg:h-[46px] rounded-full border !border-[rgba(11,11,11,0.21)] flex items-center justify-center mb-3">
                                    <h4 className='text__18'>02</h4>
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    <Link href="/privacy" className='inline-block w-full'>Privacy Policy</Link>
                                    <Link href="/terms" className='inline-block w-full'>Terms of Use</Link>
                                </div>
                            </Col>
                            <Col md={4} className="">
                                <div className="w-[40px] lg:w-[46px] h-[40px] lg:h-[46px] rounded-full border !border-[rgba(11,11,11,0.21)] flex items-center justify-center mb-3">
                                    <h4 className='text__18'>03</h4>
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    <div className='w-full'>1527 Pond Reef Rd, Ketchikan, Alaska 99901, USA</div>
                                    <div className='w-full'>+1 2345 678 90</div>
                                </div>
                            </Col>
                        </Row>

                    </div>

                    <div className="mb-4 mt-[3rem] w-full h-[1px] bg-[rgba(255,255,255,0.12)]"></div>

                    <div className="flex md:flex-nowrap flex-wrap gap-y-6 items-center justify-center md:justify-between relative">
                        <p className='text__14 opacity-60 md:w-auto w-full text-center'>©2023 Claster. All right reserved.</p>

                        <div className="flex items-center gap-3">
                            <a href="#!">
                                <img loading="lazy" src={originalUrl + "/images/ic (1).svg"} alt="" />
                            </a>
                            <a href="#!">
                                <img loading="lazy" src={originalUrl + "/images/ic (2).svg"} alt="" />
                            </a>
                            <a href="#!">
                                <img loading="lazy" src={originalUrl + "/images/ic (3).svg"} alt="" />
                            </a>
                            <a href="#!">
                                <img loading="lazy" src={originalUrl + "/images/ic (4).svg"} alt="" />
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default Footer