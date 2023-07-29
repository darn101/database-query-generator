import Footer from "../footer";
import Head from "../head";
import Slider from "../slider";

const About = () => {
    return (
        <>
            <Head />
            <div className="about-full">
                <h2 className="about-head-txt">About</h2>
                <p className="about-para">
                    We are a team of developers, designers and data analysts coming together to build an application that solves one of the most common issues of building an admin panel for the database. After building multiple admin panels for multiple projects we came to a realization that the amount of time & resource an organization puts in building an maintaining the admin panel could be cut down to more than half, so why not build something that makes it easier. We have the plan to enter the software development market and ease the pain of building an admin panel from scratch. <br />
                    <br />
                    We did our research with more than 50 companies to understand if they were to look at something like DBQ, what would be their expectations from it. Based on our research and Industry requirements we built an admin with all the commonly used features. We strive to provide the best interface and easy navigation with advanced features like Data analytics, Dashboard customization, etc
                </p>
                <h4 className="strength-head">Our Strengths</h4>
                <ul className="strength-list">
                    <li className="strength-item">Experience of working with multiple industry verticals</li>
                    <li className="strength-item">A team of knowledgeable experts.</li>
                    <li className="strength-item">Driven management with a focus on quality.</li>
                    <li className="strength-item">Our unique approach of adding traditional and new methods to develop quality products.</li>
                </ul>
                <h4 className="define-head">What defines us</h4>
                <p className="define-para">
                    DBQ is designed for powerful performance to enable businesses to scale seamlessly. We as a company want to move forward with our services that combine functionality, reliability, and usability. We aim to accelerate your time to develop with the help of our product. Our team is tech-savvy and updated with new technologies.

                    Integrity, Hard-work & Dedication are the qualities that defines the work we do at DBQ.
                </p>

            </div>


            <Slider />
            <Footer />
        </>
    );
}

export default About;