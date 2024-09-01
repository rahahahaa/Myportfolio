import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/sk-1 (2).png";
import sk2 from "../assets/sk-2 (2).png";
import sk3 from "../assets/sk-3 (2).png";
import sk4 from "../assets/sk-4 (2).png";
import sk5 from "../assets/sk-5 (2).png";
import sk6 from "../assets/sk-6 (2).png";
import sk7 from "../assets/sk-7 (2).png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={sk1} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} />
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                        <Service
                            num="1"
                            title="Web Development"
                            desc="I specialize in creating custom, high-quality websites tailored to meet your specific business needs. From single page applications to complex e-commerce platforms, I deliver responsive and user-friendly web solutions that enhance user experience and drive engagement. Leveraging the latest technologies and best practices, I ensure your website is not only visually appealing but also fast, secure, and scalable. Whether you need a new website from scratch or want to revamp your existing one, I provide comprehensive web development services that bring your vision to life."
                            data={[
                                "Custom Website Development",
                                "Single Page Applications (SPAs)",
                                "Progressive Web Apps (PWAs)",
                                "E-commerce Development",
                                "CMS Development (e.g., WordPress,)",
                            ]}
                        />
                        <Service
                            num="2"
                            title="Frontend Development"
                            desc="I create visually stunning and highly interactive front-end experiences that captivate your audience. Utilizing cutting-edge frameworks like React, Angular, and Vue.js, I build responsive and intuitive interfaces that work seamlessly across all devices. My focus on UI/UX design ensures that your website not only looks great but also offers a smooth and engaging user experience."
                            data={[
                                "Responsive Web Design",
                                "UI/UX Design",
                                "HTML5, CSS3, JavaScript",
                                "Frameworks (e.g., React)",
                                "CSS Preprocessors (e.g., SASS, LESS)",
                            ]}
                        />
                        <Service
                            num="3"
                            title="Backend Development"
                            desc="I provide robust backend development services that power your applications with efficiency and security. From RESTful API development to server-side programming using Node.js, Django, or Ruby on Rails, I ensure your backend systems are scalable and reliable. With expertise in database management and server infrastructure, I build the foundation that keeps your web applications running smoothly."
                            data={[
                                "RESTful API Development",
                                "Server-Side Development (e.g., Node.js)",
                                "Database Management (e.g., SQL)",
                                "Authentication and Authorization",
                                "Microservices Architecture",
                            ]}
                        />
                        <Service
                            num="4"
                            title="Full Stack Development"
                            desc="As a full stack developer, I offer comprehensive solutions that cover both frontend and backend development. I integrate the latest technologies to deliver end-to-end web applications that are responsive, scalable, and maintainable. From conceptualization to deployment, I handle every aspect of the development process, ensuring seamless integration and consistent performance."
                            data={[
                                "End-to-End Web Solutions",
                                "Integration of Frontend and Backend Technologies",
                                "Real-time Web Applications",
                                "Cloud Integration and Deployment (e.g., AWS, Azure, Heroku)",
                            ]}
                        />
                        <Service
                            num="5"
                            title="Consultation and Support"
                            desc="I provide expert consultation services to help you plan and execute your web development projects effectively. Whether you need guidance on project planning, technology selection, or performance optimization, I offer tailored advice to meet your goals. Additionally, I offer ongoing technical support and maintenance to ensure your applications remain up-to-date and secure."
                            data={[
                                "Project Planning and Consultation",
                                "Technical Support and Maintenance",
                                "Code Reviews and Refactoring",
                                "Performance Optimization",
                            ]}
                        />
                        <Service
                            num="6"
                            title="Additional Services"
                            desc="Beyond core development, I offer a range of additional services to enhance your web presence. This includes SEO optimization to improve your search engine rankings, data visualization for insightful reporting, and third-party API integration to extend the functionality of your applications. Whatever your needs, I provide solutions that add value and drive success for your business."
                            data={[
                                "SEO Optimization",
                                "Data Visualization",
                                "Web Analytics and Reporting",
                                "Content Management System (CMS) Setup",
                                "Third-Party API Integration",
                            ]}
                        />
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Services</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
