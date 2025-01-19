import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{backgroundColor:"#6278F7"}}> 
    
    <div className="redes">
        <a href="https://www.linkedin.com" target="_blank">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin"/>
        </a>
        <a href="https://facebok.com" target="_blank">
            <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook"/>
        </a>
        <a href="https://twitter.com" target="_blank">
            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter"/>
        </a>
    </div>
    <p>© 2025 Marcelo Ramirez</p>
    </footer>
}

export default Footer;