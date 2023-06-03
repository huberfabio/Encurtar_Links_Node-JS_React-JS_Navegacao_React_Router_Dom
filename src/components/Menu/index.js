import "./style.css";
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram } from "react-icons/bs";

export default function Menu(){
    return(
        <div className="menu"> 

            <a className="social" href="https://praticsistemas.com.br">
                <BsYoutube size={24} color="#fff" />
            </a>
            <a className="social" href="https://instagram.com/praticsistemas">
                <BsInstagram size={24} color="#fff" />
            </a>
            <Link className="menu-item" to="/links"> 
                Meus Links
            </Link>
            
        </div>
    )
}