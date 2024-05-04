import { GiCampingTent } from "react-icons/gi";
import { PiMountainsFill } from "react-icons/pi";
import { TbCampfire } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiSchoolBag } from "react-icons/gi";
import { TbRoadSign } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import aboutimg from "../../assets/aboutimg.jpg"
import packages from "./home.json"
// import { Link } from "react-router-dom";
import image from "../../assets/img2.jpg"
// import images from "../../assets/img1.jpg"
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./home.css"
const Home = ({ setIsToggle }) => {
    const navigate = useNavigate();


    const gotoAbout = () => {
        navigate('/about')
        setIsToggle(false);
    }


    return (
        <>
            <div className='imageeee'>
                {/* <div className="slide" ></div> */}

                <img src={image} alt="" />
                <div>Explore,Discover,Travel</div>
                <h1>Travel the world</h1>
            </div>
            <button className="button">Explore more</button>


            <div className="service my-5">
                <div>
                    <h1>Our Services</h1>
                </div>
                <div className="seritem d-flex">
                    <div className="serv">
                        <span><PiMountainsFill style={{ color: "white" }} /></span>
                        <div>Adventure</div>
                    </div>
                    <div className="serv">
                        <span><FaMapLocationDot /></span>
                        <div>Tour Guide</div>
                    </div>
                    <div className="serv">
                        <span><GiSchoolBag /></span>
                        <div>Trekking</div>
                    </div>
                    <div className="serv">
                        <span><TbCampfire /></span>
                        <div>Comp Fire</div>
                    </div>
                    <div className="serv">
                        <span><TbRoadSign /></span>
                        <div>off Road</div>
                    </div>

                    <div className="serv">
                        <span><GiCampingTent /></span>
                        <div>camping</div>
                    </div>
                </div>
            </div>

            <div className="my-4">
                <div className="headi ">
                    <h1>Our Packages</h1>
                </div>

                <div className="packages">
                    {packages.map((item) => {
                        return (
                            <div className="pack" key={item.id}>

                                <div className="imggt">
                                    <img src={item.images} alt={item.id} className="imgpack"/>

                                </div>
                                <div className="psp">

                                    <p className="pa">{item.name} <span><IoLocationOutline />{item.location}</span></p>
                                    <hr />
                                    <p className="prara">{item.sen}</p>
                                    <div className="bttn">

                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
            <div className="about">
                <div className="about-ite">

                    <div >
                        <img src={aboutimg} alt="" className="imgabout" />
                    </div>
                    <div className="about-head">
                        <div>About Us</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, totam? Aperiam praesentium rem assumenda repellat doloribus beatae.</p>
                        <div>

                            <button className="btnn" onClick={gotoAbout}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;