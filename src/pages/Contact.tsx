import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="pages">
            <div className="contactPage">
                
                <h1>Santiago Jiménez</h1>
                <h2>Computer Science Student</h2>
                <ul className="socialIcons" style={{ listStyleType: "none" }}>
                    <li>
                    <a className="iconLink" href="mailto: santiago.jimenez.casas@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </li>
                    <li>
                    <a className="iconLink" href="https://www.linkedin.com/in/jimenezsantiago/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                </ul>
            
            </div>
        </div>
    );
}

export default Contact;
