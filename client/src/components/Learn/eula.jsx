import Footer from "../footer";
import Head from "../head";
import Slider from "../slider";

const Eula = () => {
    return (
        <>
            <Head />
            <div className="about-full">
                <h2 className="eula-head-txt">End-User License Agreement (EULA) of DBQ</h2>
                <p className="about-para">
                    This End-User License Agreement ("EULA") is a legal agreement between you and Priyanshu Consultancy PVT. LTD.. <br />
                    <br />
                    This EULA agreement governs your use of our DBQ software ("Software") directly from Priyanshu Consultancy PVT. LTD. or indirectly through a Priyanshu Consultancy PVT. LTD. authorized reseller or distributor (a "Reseller"). <br /><br />
                    Please read this EULA agreement carefully before completing the installation process and using the DBQ software. It provides a license to use the DBQ software and contains warranty information and liability disclaimers. <br /> <br />
                    If you register for the DBQ software, this EULA agreement will also govern that trial. By clicking "accept" or installing and/or using the DBQ software, you are confirming your acceptance of the Software and agreeing to become bound by the terms of this EULA agreement. <br /><br />
                    If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have such authority or if you do not agree with the terms and conditions of this EULA agreement, do not install or use the Software, and you must not accept this EULA agreement. <br /><br />
                    This EULA agreement shall apply only to the Software supplied by Priyanshu Consultancy PVT. LTD. herewith regardless of whether other software is referred to or described herein. The terms also apply to any Priyanshu Consultancy PVT. LTD. updates, supplements, Internet-based services, and support services for the Software, unless other terms accompany those items on delivery. If so, those terms apply.

                </p>
                <h4 className="strength-head">License Grant</h4>
                <p className="define-para">
                    Priyanshu Consultancy PVT. LTD. hereby grants you a personal, non-transferable, non-exclusive license to use the DBQ software on your devices in accordance with the terms of this EULA agreement. <br /><br />
                    You are permitted to load the DBQ software (for example a PC, laptop, mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum requirements of the DBQ software. <br /><br />
                    You are not permitted to: <br />

                </p>
                <ul className="strength-list">
                    <li className="strength-item">Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor permit the whole or any part of the Software to be combined with or become incorporated in any other software, nor decompile, disassemble or reverse engineer the Software or attempt to do any such things</li>
                    <li className="strength-item">Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose</li>
                    <li className="strength-item">Allow any third party to use the Software on behalf of or for the benefit of any third party</li>
                    <li className="strength-item">Use the Software in any way which breaches any applicable local, national or international law</li>
                    <li className="stength-item">Use the Software for any purpose that Inkoop Consultancy PVT. LTD. considers is a breach of this EULA agreement</li>
                </ul>
                <h4 className="define-head">Intellectual Property and Ownership</h4>
                <p className="define-para">
                    Priyanshu Consultancy PVT. LTD. shall at all times retain ownership of the Software. The Software (and the copyright, and other intellectual property rights of whatever nature in the Software, including any modifications made thereto) are and shall remain the property of Inkoop Consultancy PVT. LTD.. <br /><br />
                    Priyanshu Consultancy PVT. LTD. reserves the right to grant licenses to use the Software to third parties.

                </p>

            </div>


            <Slider />
            <Footer />
        </>
    );
}

export default Eula;