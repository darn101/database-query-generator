import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Popover, styled } from '@mui/material';
import { useContext, useState } from 'react';
import { BiCard } from "react-icons/bi";
import { FiPaperclip } from 'react-icons/fi';
import { NameContext } from '../Context/contexts';
import { useEffect } from 'react';

const Header = () => {
    const { account } = useContext(NameContext);
    const { SetAccount } = useContext(NameContext);
    const [logname, Setlogname] = useState('');
    console.log(account);
    const [anchor, setAnchor] = useState(null);
    const [anchor2, setAnchor2] = useState(null);

    const openPopover = (event) => {
        setAnchor(event.currentTarget);
    }

    const handleClose = () => {
        setAnchor(null);
    }

    useEffect(() => {
        if (account) {
            window.localStorage.setItem('logname', JSON.stringify(account));
        }
    }, [account])

    useEffect(() => {

        const data = window.localStorage.getItem('logname');
        if (data) {
            Setlogname(JSON.parse(data));
        }

    }, [account]);

    const openlogPop = (event) => {
        setAnchor2(event.currentTarget);

    }

    const handlelogClose = () => {
        setAnchor2(null);
    }

    const LogOut = () => {
        console.log('hello');
        window.localStorage.setItem('logname', null);
        SetAccount(null);
        Setlogname(null);
        setAnchor2(null);
    }



    const open = Boolean(anchor);
    const open2 = Boolean(anchor2);

    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div>
                <ul className='list-box'>
                    <li aria-describedby={id} className='first-head' onClick={openPopover}>
                        Features
                        <div className='down-icon'><AiOutlineDown /></div>
                    </li>
                    <div className='feature-pop-box'>


                        <Pop open={open} anchorEl={anchor} onClose={handleClose}
                            anchorReference="anchorPosition"
                            anchorPosition={{ top: 85, right: 0 }}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                        >
                            <div className='menu-list'>
                                <div className='menu-items'>
                                    <div className='menu-icon'>
                                        <BiCard className="det-icon" />
                                    </div>
                                    <div>
                                        <h3 className="menu-item-head">
                                            Query Builder
                                        </h3>
                                        <p className="menu-para">Generates Database queries without writing any code</p>
                                    </div>
                                </div>
                                <div className='menu-items'>
                                    <div className='menu-icon-two'>
                                        <FiPaperclip className="det-icon-two" />
                                    </div>
                                    <div>
                                        <h3 className="menu-item-head">
                                            Copy Queries
                                        </h3>
                                        <p className="menu-para">Copy your generated queries. Use them anywhere</p>
                                    </div>
                                </div>

                            </div>
                        </Pop>
                    </div>
                    <li className='head-items'><Link to='/contact' className="foot-link" >Contact</Link></li>
                    {logname ?
                        <>
                            <li aria-describedby={id} onClick={openlogPop} className="log-box">
                                {logname}
                            </li>
                            <Pop open={open2} anchorEl={anchor2} onClose={handlelogClose}
                                anchorReference="anchorPosition"
                                anchorPosition={{ top: 85, left: 995 }}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                transformOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                            >
                                <div className='logdownbox' onClick={LogOut}>
                                    <div className='logout-box'>
                                        <p className='logpoptxt'>Logout</p>
                                    </div>

                                </div>
                            </Pop>
                        </>

                        :
                        <Link to="/login" className="link-txt-login log-box" >
                            <li>Log in</li>
                        </Link>

                    }
                </ul>
            </div>
        </>
    );
}

export default Header;

const Pop = styled(Popover)`
margin-top: 3rem;
margin-left: 20rem;

`