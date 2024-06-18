import haick_footer from "../../assets/haick_footer.svg"
import callSvg from "../../assets/call.svg"
import locationSvg from "../../assets/location.svg"
import emailSvg from "../../assets/email.svg"
import facebookPng from "../../assets/facebook.png"
import instaPng from "../../assets/insta.png"
import linkedinPng from "../../assets/linkedin.png"
import tweetPng from "../../assets/tweet.png"
import ytbPng from "../../assets/ytb.png"
const Footer = () => {
  return (
    <footer id="Contacts" className='relative py-10 bg-skyBlueColor flex flex-col xl:flex-row items-center justify-around w-full'>
            <div className='w-[410px] flex flex-col gap-10'>
                <img src={haick_footer} className="w-[100%]" />
                {/* follow section */}
                <div className="flex flex-col gap-4 items-center">
                  <div className="flex items-center gap-16">
                          <a href="" target="_blank"> <img src={facebookPng} className="w-6 h-6 object-cover" /></a>
                          <a href="" target="_blank"> <img src={instaPng} className="w-6 h-6 object-cover" /></a>
                          <a href="" target="_blank"> <img src={linkedinPng} className="w-6 h-6 object-cover" /></a>
                          <a href="" target="_blank"> <img src={tweetPng} className="w-6 h-6 object-cover" /></a>
                          <a href="" target="_blank"> <img src={ytbPng} className="w-6 h-6 object-cover" /></a>
                  </div>
                </div>
            </div>
            <div className="max-w-md w-full flex flex-col gap-5 justify-center items-center font-IPM py-6 px-9">
                    
            {/* contact section */}
                    <div className="flex flex-col items-center gap-4">
                    <h3 className="font-semibold text-midNightBlueColor text-3xl">contact us</h3>
                        <div className="flex items-center gap-3 self-start">
                            <img className="w-6 h-6 object-cover" src={locationSvg} />
                            <span className="text-white">Higher National School of Computer Science (ESI - Alger) Oued Smar, Alger</span>
                        </div>
                        <div className="flex items-center gap-3 self-start">
                        <img className="w-6 h-6 object-cover" src={emailSvg} />
                        <span className="text-white">schoolofai.algiers@esi.dz</span>
                        </div>
                        <div className="flex items-center gap-3 self-start">
                        <img className="w-6 h-6 object-cover" src={callSvg} />
                            <span className="text-white">+213 6 55 69 66 17</span>
                        </div>
                    </div>
                    
            </div>
            <p className="text-lg text-white absolute bottom-0 w-full mx-auto text-center my-4">© 2024 School of AI - Algiers. All rights reserved.</p>
    </footer>
  )
}

export default Footer
