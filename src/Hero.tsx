import './Hero.css'
import './Lines.css'

import { GetScreenWidth } from './Helpers.tsx'

function HeroSubtext(width : number) {
    if (width >= 768) {
        return (
            <>
                Get back on the road with the help of our trusted<br />
                mechanics. We give your car the care it deserves.
            </>
        )} else return null
    }

function Hero() {
  
    const width = GetScreenWidth();
    return (
    <>
        <main>
                <div className="image-container">
                <img src="src/assets/images/sam_hero_image.png" alt="decorative" />
            </div>
            <div className="hero-container">
                <span className="hero-text">
                    Car trouble?<br />
                    Let us help you.
                </span>
                <button><span className="button-text">333-333-4444</span></button>
                <span className="hero-subtext">
                    {HeroSubtext(width)}
                </span>
            </div>
        </main>
    </>
    )
}

export default Hero
