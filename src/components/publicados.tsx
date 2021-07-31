import { IconType } from 'react-icons/lib'
import {MdTimer, MdKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineLike, AiFillLike, AiOutlineComment, AiOutlineShareAlt} from 'react-icons/ai'

import IgorPerfil from '../assets/images/igorPerfil.jpeg'
import { useState } from 'react'

import '../styles/publicados.scss'

interface PublicacoesProps {
    time: string;
    visibility: string;
    icon: IconType;
    text: string;
}

export function Publicacoes({text, time, visibility, icon: Icon}:PublicacoesProps) {
    
    const [like, setLike] = useState(false)
    const [comment, setComment] = useState(0)
    const [share, setShare] = useState(0)


    function handleLike() {
        setLike(!like)
        console.log(like)
    }

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
                    <p>{like ? '1 pessoa curtiu' : 'Seja o primeiro a curtir'}</p>
                </div>
                <div className="comentarios">
                    <p>{comment} comentários</p>
                    <p>{share} compartilhamentos</p>
                </div>
            </div>
            <div className="botoes">
                <button onClick={handleLike}>
                    {like ? <AiFillLike /> : <AiOutlineLike />}
                    {like ? 'Curtiu' : 'Curtir'}
                </button>
                <button onClick={() => {setComment(comment + 1)}}><AiOutlineComment />Comentários</button>
                <button onClick={() => {setShare(share + 1)}}><AiOutlineShareAlt />Compartilhar</button>
            </div>
        </div>
    )
}