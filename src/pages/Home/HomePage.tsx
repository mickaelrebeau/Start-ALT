import welcome from '../../Images/welcome.png'
import './home.css'
import partners from '../../Images/partners.png'
import email from '../../Images/email.png'
import security from '../../Images/security.png'
import peg from '../../Images/pag.png'
import richard from '../../Images/richard.png'
import alexandra from '../../Images/alexendra.png'
import janet from '../../Images/janet.png'

export default function HomePage() {
    return (
    <>
        <main>
            <section className="header">
                <div className='header-text'>
                    <h2>WELCOME</h2>
                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                    </p>
                    <button>Explore</button>
                </div>
                <div>
                    <img src={welcome} alt="Welcome"/>
                </div>
            </section>

            <section className='partners'>
                <h2>PARTNERS</h2>
                <h3>Lorem Ipsum Dolor</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <img src={partners} alt=""/>
                </div>
                <button className='learn'>Learn More</button>
            </section>

            <section className='email'>
                <div>
                    <img src={email} alt="" />
                </div>
                <div className='card-text'>
                    <h2>Lorem ipsum dolor sit amet consectetur </h2>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                    </p>
                    <button className='learn'>Learn More</button>
                </div>
            </section>

            <section className='security'>
                <div className='card-text'>
                    <h2>Lorem ipsum dolor sit amet consectetur </h2>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                    </p>
                    <button className='learn'>Learn More</button>
                </div>
                <div>
                    <img src={security} alt="" />
                </div>
            </section>

            <section className='team'>
                <h2>TEAM</h2>
                <h3>Our Talents</h3>
                <p>
                Lorem ipsum, dolor sit amet consectetur
                Suscipit nemo hic quos, ab,
                </p>
                <div className='card'>
                    <div>
                        <img src={peg} alt="" />
                        <h2>Peg Legge</h2>
                        <p>CEO</p>
                    </div>
                    <div>
                        <img src={richard} alt="" />
                        <h2>Richard Guerra</h2>
                        <p>CTO</p>
                    </div>
                    <div>
                        <img src={alexandra} alt="" />
                        <h2>Alexendra Stolz</h2>
                        <p>DESIGNER</p>
                    </div>
                    <div>
                        <img src={janet} alt="" />
                        <h2>Janet Bray</h2>
                        <p>DEVELOPER</p>
                    </div>
                </div>
                <button className='learn'>View Team</button>
            </section>
        </main>
    </>
    )
}