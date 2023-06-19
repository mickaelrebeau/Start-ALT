import './contact.css'
import map from '../../Images/map.png'

export default function ContactPage() {
    return (
    <>
        <div className='contact'>
            <h1>Contact Us</h1>
            <p>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
            </p>
        </div>

        <section className='contact-form'>
            <div>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" value='name' name='name' />

                    <label htmlFor="email">Email</label>
                    <input type="text" value='email' name='email' />

                    <label htmlFor="message">Message</label>
                    <input type="textarea" value='message' name='message'/>

                    <button>Submit</button>
                </form>
            </div>
            <div>
                <img src={map} alt="" />
            </div>
        </section>
    </>
    )
}