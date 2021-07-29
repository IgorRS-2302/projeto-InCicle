import '../styles/publicados.scss'
import IgorPerfil from '../assets/images/igorPerfil.jpeg'
import {MdTimer} from 'react-icons/md'
import { IconType } from 'react-icons/lib'

interface PublicacoesProps {
    text: string;
    visibility: string;
    icon: IconType;
}

export function Publicacoes({text, visibility, icon: Icon}:PublicacoesProps) {
    return (
        <div className="publicacao">
            <div className="fotoMiniatura">
                <div className="bordaMiniatura">
                    <div className="imagemMiniatura">
                        <img src={IgorPerfil} alt="fotoPerfil" />
                    </div>
                </div>
                <div className="nomeMiniatura">
                    <strong>Igor Siqueira</strong>
                    <div className="informacoes">
                        <MdTimer />
                        <p>{text}</p>
                        <Icon />
                        <p>{visibility}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}