import travelimg from "../../assets/6399-191636228_small (1).mp4";
import "./aboutsection.css"
import aboutsec from "./aboutsec.json"
const AboutSection = () => {
    return (
        <>
            <div className="containertwo">
                <div className="im">

                    <img src="pexels-nina-uhlikova-287240.jpg" alt="" />
                    <div className="aboutus">About Us</div>
                </div>
                <div className="maindiv">
                    <div className="vdo">
                        <video autoPlay loop muted src={travelimg}></video>
                    </div>
                    <div className="parap">
                        <h3 className="text-center">why choose us?</h3>
                        <p>While you’ll find many of the things you already love, and discover new ones, there are a few things that are different here. Take for example our units of measurement, our electricity, our business hours and official public holidays. We suggest you begin with a brief overview of U.S. customs and culture. From here, you will find information covers family travel, activity planning, shopping and an overview of the country’s health and safety information. No matter if your trip length is two days or two months, these sections will help make you an informed traveler.

                            Have a great trip!</p>
                        <div className="imgi">
                            <div>
                                <i className="fa-solid fa-map"></i>

                                <p className="text-center">Best Desination</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-hand-holding-dollar"></i>
                                <p className="text-center">Affortable price</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-headset"></i>
                                <p className="text-center">24/7 support</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="foot">
                    <div>

                        <h1 className="my-5">Client Reviews</h1>
                    </div>
                    <div className="footdiv my-5 mb-6">


                        {aboutsec.map((item) => {
                            return (
                                <div key={item.id} className="w-200">
                                    <div className="abtimg">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div>
                                        <div className="fw-bold text-center mb-3"> {item.name}</div>
                                        <p className="text-center">{item.para}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutSection;