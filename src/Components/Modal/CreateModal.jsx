import React, { Fragment } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'
import useHostname from '../Provider/HostnameProvider';
import { DownloadtIcon, SharetIcon } from '../svg/Svg';

const CreateModal = ({ darkMode, show, handleClose, selectModal }) => {

    const showingForm = (e) => {
        switch (e) {
            case "ModalClass":
                return <ModalClass darkMode={darkMode} show={show} handleClose={() => handleClose()} />
                break;
            case "DetailClass":
                return <DetailClass darkMode={darkMode} show={show} handleClose={() => handleClose()} />
                break;
            default:
                break;
        }
    }

    return (
        <Fragment>
            <Modal centered show={show} onHide={handleClose} className={darkMode ? "DarkClass" : ""}>
                <Modal.Body>

                    {
                        showingForm(selectModal)
                    }

                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default CreateModal

export const ModalClass = ({ darkMode, show, handleClose }) => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <div className="flex items-center justify-between mb-4">
                <h3 className='font-semibold text__24'>Create New Class</h3>
                <img src={originalUrl + "/images/sasa.svg"} onClick={handleClose} className='cursor-pointer' alt="" />
            </div>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='font-normal text__14 text-[#A3A3A3] dark:text-white'>Add Class</Form.Label>
                <Form.Control type="email" placeholder="Type Name" className='dark:placeholder:text-MGrayscale_400 dark:text-white dark:bg-MGrayscale_800 dark:!border-MGrayscale_700 font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[12px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='font-normal text__14 text-[#A3A3A3] dark:text-white'>Select learning</Form.Label>
                <Form.Select aria-label="Default select example" className='dark:placeholder:text-MGrayscale_400 dark:text-white dark:bg-MGrayscale_800 dark:!border-MGrayscale_700 font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[12px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]'>
                    <option disabled hidden selected>Select Learning Course</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Form.Label className='font-normal text__14 text-[#A3A3A3] dark:text-white'>Select Time</Form.Label>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="time" placeholder="Select Time" className='dark:placeholder:text-MGrayscale_400 dark:text-white dark:bg-MGrayscale_800 dark:!border-MGrayscale_700 font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[12px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="time" placeholder="Select Time" className='dark:placeholder:text-MGrayscale_400 dark:text-white dark:bg-MGrayscale_800 dark:!border-MGrayscale_700 font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[12px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                <Form.Label className='font-normal text__14 text-[#A3A3A3] dark:text-white'>Description</Form.Label>
                <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Description Class" className='dark:placeholder:text-MGrayscale_400 dark:text-white dark:bg-MGrayscale_800 dark:!border-MGrayscale_700 font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[12px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
            </Form.Group>

            <div className="flex items-center justify-between gap-4">
                <div onClick={handleClose} className=" px-4 py-3 w-full text-center border !border-MPrimary text-MPrimary rounded-xl font-medium text__16 cursor-pointer">
                    Cancel
                </div>
                <div onClick={handleClose} className="px-4 py-3 w-full text-center border bg-MPrimary !border-MPrimary text-white rounded-xl font-medium text__16 cursor-pointer">
                    Create now
                </div>
            </div>

        </Fragment>
    )
}

export const DetailClass = ({ darkMode, show, handleClose }) => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <div className="flex items-center justify-between mb-4">
                <h3 className='font-semibold text__24 dark:text-white'>Detail Class</h3>
                <img src={originalUrl + "/images/sasa.svg"} onClick={handleClose} className='cursor-pointer' alt="" />
            </div>


            <h3 className='font-semibold text__24 mb-3 dark:text-white'>Implement Login Website With HTML/CSS & JS</h3>

            <div className="flex flex-wrap gap-3">
                <div className="grid grid-cols-3 gap-3 w-full items-center">
                    <div className="col-span-1 font-medium text__16 dark:text-white">
                        Learning
                    </div>
                    <div className="col-span-2">
                        <div className="px-4 py-2 rounded-full bg-MPrimary text__12 text-white dark:text-white inline-block">Development</div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 w-full items-center">
                    <div className="col-span-1 font-medium text__16 dark:text-white">
                        Due Date Class
                    </div>
                    <div className="col-span-2">
                        <p className="text__16 dark:text-white">9 AM - 11 AM, 20 Jan 2024</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 w-full items-center">
                    <div className="col-span-1 font-medium text__16">
                        Teacher
                    </div>
                    <div className="col-span-2">
                        <div className="flex items-center gap-2">
                            <img src={originalUrl + "/images/Ellipse 474.png"} className='w-[30px] h-[30px] rounded-full object-cover' alt="" />
                            <p className='text__14 dark:text-white'>Rachel Grabiella</p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <h5 className='font-medium text__16 mb-3 dark:text-white'>Description</h5>
                    <p className='text__16 text-MGrayscale_700 dark:text-white'>This class aims to equip participants with the fundamental skills required to create a functional login website using HTML, CSS, and JavaScript. Participants will gain hands-on experience in web development, understanding how to structure a webpage, style it for a visually appealing user interface, and implement client-side validation for a basic login form.</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
                <div className="w-full flex items-center justify-between p-3 border !border-MGrayscale_200 dark:!border-MGrayscale_600 rounded-xl">
                    <div className="flex items-center gap-3">
                        <img src={originalUrl + "/images/doc.svg"} alt="" />
                        <div className="">
                            <h5 className='font-medium text__12 dark:text-white'>Material Codes</h5>
                            <div className='flex items-center gap-2'>
                                <p className='text-MGrayscale_400 text__12'>DOCX</p>
                                <p className='text-MGrayscale_400 text__12'>|</p>
                                <p className='text-MGrayscale_400 text__12'>3,5 MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end gap-3">
                        <SharetIcon color={darkMode ? "white" : "#171717"} />
                        <DownloadtIcon color={darkMode ? "white" : "#171717"} />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between p-3 border !border-MGrayscale_200 dark:!border-MGrayscale_600 rounded-xl">
                    <div className="flex items-center gap-3">
                        <img src={originalUrl + "/images/ppt.svg"} alt="" />
                        <div className="">
                            <h5 className='font-medium text__12 dark:text-white'>Presentation</h5>
                            <div className='flex items-center gap-2'>
                                <p className='text-MGrayscale_400 text__12'>PPTX</p>
                                <p className='text-MGrayscale_400 text__12'>|</p>
                                <p className='text-MGrayscale_400 text__12'>3,5 MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end gap-3">
                        <SharetIcon color={darkMode ? "white" : "#171717"} />
                        <DownloadtIcon color={darkMode ? "white" : "#171717"} />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
