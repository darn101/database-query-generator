import Head from "./head";
import { BiCard } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Footer from "./footer";
import Slider from "./slider";
import { useState } from "react";
import Header from "./header";



const Landing = () => {
    const [logname, Setlogname] = useState('');
    const handleData = (data) => {
        console.log(data);
    }


    return (
        <>
            <Header />
            <div className="heading-box">
                <div className="Heading">DBQ</div>
                <div className="head-desc">Generate Raw Databse Queries with 0% code. </div>
                <Link to="/Generate" className="linky">
                    <div className="check-box link-word"><p>Check it out</p></div></Link>
                <div className="feat-box fade-in">
                    <div className="elements">
                        <div>
                            <BiCard className="det-icon" />
                        </div>
                        <div className="below-head">
                            <h3 className="det-head-text">
                                No-code Database Query Builder
                            </h3>
                            <p className="det-para">Generate Database queries without writing any code. An advanced query builder to generate Database Code.</p>
                        </div>
                    </div>
                    <div className="elements">
                        <div>
                            <FiMenu className="det-icon" />
                        </div>

                        <div className="below-head">
                            <h3 className="det-head-text">
                                Advanced tools to build complex queries
                            </h3>
                            <p className="det-para">Complex queries can be generated with the help of advanced tools</p>

                        </div>
                    </div>
                    <div className="elements">
                        <div>
                            <FiPaperclip className="det-icon-two" />
                        </div>

                        <div className="below-head">
                            <h3 className="det-head-text">
                                Copy generated Database Query
                            </h3>
                            <p className="det-para">Generate the raw SQL query and copy them for further use in your code.</p>

                        </div>
                    </div>
                </div>
                <Slider />
            </div >
            <Footer />
        </>
    );
}

export default Landing;