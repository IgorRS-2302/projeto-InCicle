import '../styles/user.scss'
import IgorPerfil from '../assets/images/igorPerfil.jpeg'
import PinDropIcon from '@material-ui/icons/PinDrop'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'

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
                <PinDropIcon/>
                <p>Recife/Pernambuco - Brasil</p>
                </div>
                <div>
                <WorkIcon/>
                <p>InCicle</p>
                <SchoolIcon/>
                <p>IFPE - Recife</p>
                </div>
            </div>
        </div>
    )
}