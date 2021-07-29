import '../styles/user.scss'
import IgorPerfil from '../assets/images/igorPerfil.jpeg'
import {HiLocationMarker} from 'react-icons/hi'
import {MdWork} from 'react-icons/md'
import {IoMdSchool} from 'react-icons/io'

export function Usuario() {
    return (
        <div className="perfil">
            <div className="bordaPerfil">
                <div className="imagemPerfil">
                    <img src={IgorPerfil} alt="fotoPerfil" />
                </div>
            </div>
            <h1>Igor Siqueira</h1>
            <h2>@igorsiqueira</h2>
            <h3>Front-End Developer</h3>
            <div className="informacoes">
                <div>
                 <HiLocationMarker />
                <p>Recife/Pernambuco - Brasil</p>
                </div>
                <div>
                 <MdWork />
                <p>InCicle</p>
                 <IoMdSchool />
                <p>IFPE - Recife</p>
                </div>
            </div>
        </div>
    )
}