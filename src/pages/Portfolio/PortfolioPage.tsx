import './portfolio.css'
import landing from '../../Images/landing-page.png'
import web from '../../Images/web-design.png'
import rocket from '../../Images/roquet-buisness.png'
import shopping from '../../Images/shopping.png'
import geometric from '../../Images/geometric-shape.png'
import trick from '../../Images/trick-treat.png'
import halloween from '../../Images/halloween.png'
import reality from '../../Images/virtual-reality.png'

export default function PortfolioPage() {
    return (
    <>
        <div className='portfolio'>
            <h2>WORKS</h2>
            <h1>Portfolio</h1>
            <p>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
            </p>
        </div>

        <section className='portfolio-grid'>
            <div className='grid'>
                <div className='design'>
                    <img src={landing} alt="" />
                    <img src={web} alt="" />
                    <img src={rocket} alt="" />
                    <img src={shopping} alt="" />
                    <img src={geometric} alt="" />
                    <img src={trick} alt="" />
                    <img src={halloween} alt="" />
                    <img src={reality} alt="" />
                </div>
            </div>
            <button className='button'>Learn More</button>
        </section>
    </>
    )
}