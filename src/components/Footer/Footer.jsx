import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className="colo">
                <div className="colu">
                    <div>
                        <h1 className="text-center mb-4">Upto 60% Off</h1>
                        <p className="holi text-center ">Planning an international holiday on a budget is an uphill task. But what if we say we have mind-boggling international holidays under 60K!</p>

                    </div>
                    <div className="bttn">
                        <button>BOOK NOW</button>
                    </div>

                </div>
            </div>
            <div className="footer">
                <div className="footerdiv">
                    <div className="footer-list">
                        <div>Quick Links</div>
                        <ul className="pt-3 pb-4">
                            <li><i className="fa-solid fa-angle-right"></i>Home</li>
                            <li><i className="fa-solid fa-angle-right"></i>About</li>
                            <li><i className="fa-solid fa-angle-right"></i>Package</li>
                            <li><i className="fa-solid fa-angle-right"></i>Book</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <div>Extra Links</div>
                        <ul className="pt-3 pb-4">
                            <li><i className="fa-solid fa-angle-right"></i>Need Help</li>
                            <li><i className="fa-solid fa-angle-right"></i>About Us</li>
                            <li><i className="fa-solid fa-angle-right"></i>Privacy Policy</li>
                            <li><i className="fa-solid fa-angle-right"></i>terms Of Use</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <div>Contact Info</div>
                        <ul className="pt-3 pb-4">
                            <li><i className="fa-solid fa-phone-flip"></i>+123-456-7890</li>
                            <li><i className="fa-solid fa-phone-flip"></i>+111-222-3333</li>
                            <li><i className="fa-solid fa-envelope"></i>abc@gmail.com</li>
                            <li><i className="fa-solid fa-map"></i>Mumbai,India-009900</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <div>Contact Info</div>
                        <ul className="pt-3 pb-4">
                            <li><i className="fa-brands fa-facebook-f"></i>Facebook</li>
                            <li><i className="fa-brands fa-x-twitter"></i>Twitter</li>
                            <li><i className="fa-brands fa-instagram"></i>Instagram</li>
                            <li><i className="fa-brands fa-linkedin"></i>LinkedIn</li>
                        </ul>
                    </div>
                </div>
               
                <div className="p-1 text-center">
                    <div className="mb-2 text-white small">created by @abc-designer | All Rights Reserved!</div>
                </div>
            </div>

        </>
    )
}
export default Footer;