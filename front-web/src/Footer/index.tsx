import './styles.css'
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer(){
    return (

        <footer className="main-footer">
            App desenvolvido por Welton Dias durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCySA_C75gY-_fPPp8I7LmFA" target="_new">
                    <YoutubeIcon />
                </a>

                <a href="https://www.linkedin.com/in/welton-dias-pereira-6a1b5aa2/" target="_new">
                    <LinkedinIcon />
                </a>

                <a href="https://www.instagram.com/welton_dias_2018/?hl=pt-br" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>

    )
}

export default Footer;
