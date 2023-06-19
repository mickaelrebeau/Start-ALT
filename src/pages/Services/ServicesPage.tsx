import './services.css'
import check from '../../Images/check.png'

export default function ServicesPage() {
    return (
    <>
        <div className='services'>
            <h2>PLANS</h2>
            <h1>Our Services</h1>
            <p>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
            </p>
        </div>
        
        <section className='plans'>
            <div>
                <h2>Basic</h2>
                <h3><span>$100</span> /month</h3>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam  
                </p>
                <div className='check-list'>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                </div>
                <button>Learn More</button>
            </div>
            <div>
                <h2>Plus</h2>
                <h3><span>$250</span> /month</h3>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam  
                </p>
                <div className='check-list'>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                </div>
                <button>Learn More</button>
            </div>
            <div>
                <h2>Pro</h2>
                <h3><span>$400</span> /month</h3>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam  
                </p>
                <div className='check-list'>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='check'>
                        <img src={check} alt="" />
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                </div>
                <button>Learn More</button>
            </div>
        </section>
    </>
    )
}