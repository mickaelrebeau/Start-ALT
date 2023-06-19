import medias from '../../Images/medias.png'

export default function Footer() {
    return (
        <footer>
            <div>
                <img src={medias} alt="Medias"></img>
            </div>
            <p>© Start, 2022. All rights reserved.</p>
        </footer>
    )
}