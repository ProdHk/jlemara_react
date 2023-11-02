import styled from "styled-components"
import Components from "../../Components"
import colors from "../../Utils/colors"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { URL } from '../../Utils/dbConfig'



const Model = styled.div`

    width: 100vw;
    height:100vh;
    display: flex;
    text-align: center;
    align-items: start;
    justify-content: center;
    .body{
        width: 100%;
        height:100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: space-evenly;
        .header{
            font-size: 18pt;
        }
        .form{
          
            margin: 0 auto;
            width: 100%;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
            justify-content: space-evenly;
            .section-row{
                border: solid 1px ${colors.Blue};
                border-radius: 10px;
                width: 30%;
                padding: 25px;
                display:flex;
                flex-direction: column;
                text-align:center;
                align-items: center;
                justify-content:center;
                flex-wrap: wrap;
                height:350px;
                
           }
           
           select{
                width: 50%;
            }     
           .section-lote{
            .item{
                display:flex;
                text-align: center;
                align-items: center;
                justify-content: space-evenly;
            }
                border: solid 1px ${colors.Blue};
                border-radius: 10px;
                width: 40%;
                display:flex;
                padding: 25px;
                flex-direction: column;
                text-align:center;
                align-items: center;
                justify-content:space-between;
                height:350px;
           }
           input, select{
            padding: 10px;
            border-radius: 10px;
            border: none;
            text-align: center;
            align-items: center;
            justify-content: center;
                transition: all .2s ease-in-out;
                border: solid 1px ${colors.Blue};

            display: flex;
            &:hover{
                padding: 15px;
                transition: all .2s ease-in-out;

            }
            
            
            
           }
           .item{
                    margin: 10px;
                    width: 100%;
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: space-between;
                    .label{
                        width: 40%;
                    }
                    .select{
                        width: 60%;
                    }
                }
        }
        .icon{   
            border: solid 1px ${colors.Blue};
            width: 20%;
            margin-top: 15px;
            border-radius: 10px;
            padding: 15px;
            transition: all .2s ease-in-out;
            &:hover{
                border: solid 1px ${colors.Green};
                border-radius: 10px 20px 10px 20px;
                background-color: ${colors.Green};
                transition: all .2s ease-in-out;
                
            }
                }
    }
    


`


export default function VistoriasAdd(props) {

    const [solicitante, setSolicitante] = useState('')
    const [motivo, setMotivo] = useState('')
    const [observacoes, setObservacoes] = useState('')
    const [nLote, setNLote] = useState(0)
    const [nQuadra, setNQuadra] = useState(0)
    const [bairro, setBairro] = useState('')
    const [municipio, setMunicipio] = useState('')

    const setData = async () => {
        const lote = { nLote, nQuadra, bairro, municipio }
        const data = { solicitante, motivo, observacoes, lote }
        await axios.post(URL, data)

    }
    return (
        <Model>
            <Components.Sidebar />
            <div className="body">
                <div className="header">
                    Concluir solicitação
                </div>
                <div className="form">
                    {/* 
                - agua / estado e leitura / classificação
                - benfeitorias / estado e desc
                - construção / estado e desc
                - Classificação
                - esgoto
                - luz / estado e desc / leitura e identificador / classificação
                - rua / estado e desc
                - topografia
                - iptu / indice, anos, debitos
                - iptu / 
                
                */}

                    <div className="section-row">
                        <div className="item">
                            <label>Seu nome</label>
                            <input type="text"
                                onChange={(e) => { setSolicitante(e.target.value) }}
                                placeholder="Insira seu nome aqui"
                            />
                        </div>

                        <div className="item">
                            <label>Observações</label>
                            <input type="text"
                                onChange={(e) => { setObservacoes(e.target.value) }}
                                placeholder="Existe alguma ?"
                            />
                        </div>

                        <div className="item">
                            <label>O lote possui agua instalada ?</label>
                            <input type="checkbox"
                                onChange={(e) => { setObservacoes(e.target.value) }}
                            />
                        </div>
                        <div className="item">
                            <label>O lote possui luz instalada ?</label>
                            <input type="checkbox"
                                onChange={(e) => { setObservacoes(e.target.value) }}
                            />
                        </div>

                        <div className="item">
                            <label style={{ margin: '0 10px 0 0 ' }}>Fotos</label>
                            <input type="file"
                                onChange={(e) => { setObservacoes(e.target.value) }}
                                placeholder="Existe alguma ?"
                            />
                        </div>

                    </div>
                    <div className="section-lote">
                        {/* Lote */}
                        <h2>Classificação</h2>

                        <div className="item">
                            <label>Topografia</label>
                            <select>
                                <option value={'aclive'}>Aclive</option>
                                <option value={'plano'}>Plano</option>
                                <option value={'declive'}>Declive</option>
                            </select>
                        </div>
                        <div className="item">
                            <label>Geral</label>
                            <select>
                                <option value={'aclive'}>A+</option>
                                <option value={'plano'}>A</option>
                                <option value={'declive'}>B</option>
                                <option value={'declive'}>C</option>
                            </select>
                        </div>
                        <div className="item">
                            <label>Agua</label>
                            <select>
                                <option value={'plano'}>A</option>
                                <option value={'declive'}>B</option>
                                <option value={'declive'}>C</option>
                            </select>
                        </div>
                        <div className="item">
                            <label>Luz</label>
                            <select>
                                <option value={'plano'}>A</option>
                                <option value={'declive'}>B</option>
                                <option value={'declive'}>C</option>
                            </select>
                        </div>
                        <div className="item">
                            <label>Rua</label>
                            <select>
                                <option value={'plano'}>A</option>
                                <option value={'declive'}>B</option>
                                <option value={'declive'}>C</option>
                            </select>
                        </div>




                    </div>
                    <div className="section-lote">
                        {/* Lote */}
                        <h2>Informações adicionais</h2>

                        <div className="item">
                            <label>Topografia</label>
                            <select>
                                <option value={'aclive'}>Aclive</option>
                                <option value={'plano'}>Plano</option>
                                <option value={'declive'}>Declive</option>
                            </select>
                        </div>
                        <div className="item">
                            <label>Geral</label>
                            <input type="text"
                                placeholder="Digite aqui"
                            />
                        </div>
                        <div className="item">
                            <label>Agua</label>
                            <input type="text"
                                placeholder="Digite aqui"
                            />
                        </div>
                        <div className="item">
                            <label>Luz</label>
                            <input type="text"
                                placeholder="Digite aqui"
                            />
                        </div>
                        <div className="item">
                            <label>Rua</label>
                            <input type="text"
                                placeholder="Digite aqui"
                            />
                        </div>




                    </div>
                </div>

                <Link onClick={setData} className="icon">Adicionar</Link>

            </div>
        </Model >
    )
}