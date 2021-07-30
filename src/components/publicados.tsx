import { IconType } from 'react-icons/lib'
import {MdTimer, MdKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineLike, AiOutlineComment, AiOutlineShareAlt} from 'react-icons/ai'

import { Button } from './button'
import IgorPerfil from '../assets/images/igorPerfil.jpeg'

import '../styles/publicados.scss'

interface PublicacoesProps {
    time: string;
    visibility: string;
    icon: IconType;
    text: string;
}

export function Publicacoes({text, time, visibility, icon: Icon}:PublicacoesProps) {
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
                        <p>{time}</p>
                        <Icon />
                        <p>{visibility}</p>
                    </div>
                </div>
                <div className="mais">
                    <MdKeyboardArrowDown size={24} />
                </div>
            </div>
            <div className="textoPublicacao">
                <p>{text}</p>
            </div>
            <div className="metricas">
                <div className="likes">
                    <AiOutlineLike />
                    <p>Seja o primeiro a curtir</p>
                </div>
                <div className="comentarios">
                    <p>0 comentários</p>
                    <p>0 compartilhamentos</p>
                </div>
            </div>
            <div className="botoes">
                <Button ><AiOutlineLike />Curtir</Button>
                <Button ><AiOutlineComment />Comentários</Button>
                <Button ><AiOutlineShareAlt />Compartilhar</Button>
            </div>
        </div>
    )
}