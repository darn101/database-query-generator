import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NameContext } from '../Context/contexts';

const Slider = () => {
    const ScrollUp = () => {
        window.scrollTo(0, 0);
    }

    const { account } = useContext(NameContext);

    return (
        <>
            <div className="slide-back">
                <div className="sliderz fade-in">
                    <div className="slide-head">Let's get you started</div>
                    <div className="slide-btns">
                        <div className="slide-contact-box"><Link to='/contact' className="cont-link" onClick={ScrollUp}>Contact Us</Link></div>
                        <div className="slide-started-box">
                            {{ account } ?
                                <Link to="/Generate" className="link-txt-login" >
                                    <div>Get Started</div>
                                </Link>
                                :
                                <Link to="/login" className="link-txt-login" >
                                    <div>Get Started</div>
                                </Link>}
                        </div>
                    </div>
                </div>

            </div >
        </>
    );
}

export default Slider;