import { AiOutlineCopyright, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
    const ScrollUp = () => {
        window.scrollTo(0, 0);
    }
    return (<>
        <div className="full-footer">
            <div className="foot-elements-comp">
                <div className="comp-name">
                    <h1 className="foot-comp-head">DBQ</h1>
                </div>
                <div className="comp-desc">
                    <p>DBQ is a product that lets you generate Queries for your databases - MongoDB, SQL, PostgressSQL,MariaDB, Firebase, Prisma, DynamoDB.</p>
                </div>
                <div className="copyright-thing">

                    <p className="copy-year"> <AiOutlineCopyright className="copy-icon" /> 2023, By Priyanshu</p>
                </div>
                <div className="media-handles">
                    <AiOutlineTwitter className="media-icon" />
                    <AiFillInstagram className="media-icon second-icon" />
                </div>
            </div>
            <div className="foot-elements">
                <div className="comp-name">
                    <h2>Learn</h2>
                </div>
                <div>
                    <ul className="learn-links">
                        <li className="learn-link"><Link to='/about' className="foot-link" onClick={ScrollUp}>About</Link></li>
                        <li className="learn-link"><Link to='/eula' className="foot-link" onClick={ScrollUp}>End-User License Angreement</Link></li>
                    </ul>
                </div>
            </div>
            <div className="foot-elements">
                <div className="comp-name">
                    <h2>Connect</h2>
                </div>
                <div>
                    <ul className="learn-links">
                        <li className="learn-link"><Link to='/contact' className="foot-link" onClick={ScrollUp}>Contact</Link></li>
                        <li className="learn-link"><Link to='/feedback' className="foot-link" onClick={ScrollUp}>Send Feedback</Link></li>
                        <li className="learn-link"><Link to='/report' className="foot-link" onClick={ScrollUp}>Report an Issue</Link></li>
                        <li className="learn-link"><Link to='/suggest' className="foot-link" onClick={ScrollUp}>Suggest a Feature</Link></li>
                        <li className="learn-link"><Link to='/write' className="foot-link" onClick={ScrollUp}>Write for Us</Link></li>
                    </ul>
                </div>
            </div>

        </div>

    </>
    );
}

export default Footer; 