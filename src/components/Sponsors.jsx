import Marquee from "react-fast-marquee";
import skycityImg from "../assets/images/skycity.jpg"
import toddImg from "../assets/images/todd.png"
import cogsImg from "../assets/images/cogs.jpg"
import foundationImg from "../assets/images/foundation.png"
import ministryImg from "../assets/images/ministry.jpg"
import lottoImg from "../assets/images/lotto.jpg"

const Sponsors = () => {
    const imgWidth = 200;

    return (
        <div className="flex flex-col mt-20">
            <h1 className="ml-10 text-5xl mb-20">Our Partners</h1>
            <Marquee autoFill={true}>
                <img src={skycityImg.src} className="px-8" alt="skycity" width={imgWidth} />
                <img src={toddImg.src} className="px-8" alt="todd" width={imgWidth} />
                <img src={cogsImg.src} className="px-8" alt="cogs" width={imgWidth} />
                <img src={foundationImg.src} className="px-8" alt="foundation" width={imgWidth} />
                <img src={ministryImg.src} className="px-8" alt="ministry" width={imgWidth} />
                <img src={lottoImg.src} className="px-8" alt="lotto" width={imgWidth} />
            </Marquee>
        </div>

    )
}

export default Sponsors