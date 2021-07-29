import {FaEdit} from 'react-icons/fa'
import {IoMdPhotos} from 'react-icons/io'
import {IoMdVideocam} from 'react-icons/io'
import { Publicacoes } from './publicados'
import { MdPublic, MdLock } from 'react-icons/md'

import '../styles/posts.scss'

export function Posts() {
    return (
        <div className="publicacoes">
            <div className="novaPublicacao">
                <div className="escrevaAqui">
                    <FaEdit size={30} color="#4d4e4f"/>
                    <p>Escreva uma publicação...</p>
                    <div id="photo"><IoMdPhotos size={30} color="#4d4e4f" /></div>
                    <div id="video"><IoMdVideocam size={30} color="#4d4e4f" /></div>
                </div>
                <div className="privado">
                    <p>ou <strong>publique um artigo</strong> na InCicle</p>
                </div>
            </div>
            <Publicacoes text="Há cerca de 8 horas" icon={MdLock} visibility="Somente eu"/>
            <Publicacoes text="Há 8 dias" icon={MdPublic} visibility="Público"/>
        </div>
    )
}