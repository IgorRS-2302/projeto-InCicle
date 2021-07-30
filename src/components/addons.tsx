import {BiTachometer} from 'react-icons/bi'
import {FaBirthdayCake, FaHourglassEnd} from 'react-icons/fa'

import '../styles/addons.scss'

export function Addons() {
    return (
        <div className="adicionais">
            <div className="eficiencia">
                <div className="eficienciaTitulo">
                    <BiTachometer size={30}/>
                    <p>Eficiência</p>
                </div>
                <div className="espaçador"></div>
                <div className="porcentagens">
                    <div className="atividadesProjetos">
                        <div className="atividades">
                            <div className="quantidadeAtividades">
                                <p>Atividades</p>
                                <p>23/106</p>
                            </div>
                            <p className="porcentagemAtividades">50%</p>
                        </div>
                        <div className="projetos">
                            <div className="quantidadeProjetos">
                                <p>Projetos</p>
                                <p>23/106</p>
                            </div>
                            <p className="porcentagemProjetos">50%</p>
                        </div>
                    </div>
                    <div className="total">
                        <div className="quantidadeTotal">
                            <p>Total</p>
                            <p>23/106</p>
                        </div>
                        <p className="porcentagemTotal">50%</p>
                    </div>
                </div>
                <div className="tabelas">
                    <div className="tabelaAtividades">
                        <strong>Atividades</strong>
                        <p>Pendentes &nbsp; 3</p>
                        <p>Pendentes &nbsp; 3</p>
                        <p>Pendentes &nbsp; 3</p>
                    </div>
                    <div className="tabelaProjetos">
                        <strong>Projetos</strong>
                        <p>Pendentes &nbsp; 3</p>
                        <p>Pendentes &nbsp; 3</p>
                        <p>Pendentes &nbsp; 3</p>
                    </div>
                    <div className="tabelaTotal">
                        <strong>Total</strong>
                        <p>Pendentes &nbsp; 6</p>
                        <p>Pendentes &nbsp; 6</p>
                        <p>Pendentes &nbsp; 6</p>
                    </div>
                </div>
            </div>
            <div className="aniversariantes">
                <div className="aniversariantesTitulo">
                    <FaBirthdayCake size={22} />
                    <p>Aniversariantes</p>
                </div>
                <div className="espaçador"></div>
                <p>Nenhum dos seus amigos comemora aniversário hoje</p>
            </div>
            <div className="pendencias">
                <div className="pendenciasTitulo">
                    <FaHourglassEnd size={22} />
                    <p>Pendências</p>
                </div>
                <div className="data">
                    <strong>Sex, 30 de Jul</strong>
                </div>
                <p>Você não possui nenhuma pendência para hoje</p>
            </div>
        </div>
    )
}