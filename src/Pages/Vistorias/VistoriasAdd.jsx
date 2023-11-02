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
            width: 60%;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
            justify-content: space-between;
            .section-row{
                border: solid 1px ${colors.Blue};
                border-radius: 10px;
                width: 50%;
                padding: 25px;
                display:flex;
                flex-direction: column;
                text-align:center;
                align-items: center;
                justify-content:center;
                flex-wrap: wrap;
                height:350px;
                
           }
           
                
           .section-lote{
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
           input{
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
                    width: 300px;
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: space-between;
                    
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
                    Nova solicitação
                </div>
                <div className="form">


                    <div className="section-row">
                        <div className="item">
                            <label>Seu nome</label>
                            <input type="text"
                                onChange={(e) => { setSolicitante(e.target.value) }}
                                placeholder="Insira seu nome aqui"
                            />
                        </div>


                        <div className="item">
                            <label>Motivo</label>
                            <input type="text"
                                onChange={(e) => { setMotivo(e.target.value) }}
                                placeholder="Qual o motivo da vistoria?"
                            />
                        </div>

                        <div className="item">
                            <label>Observações</label>
                            <input type="text"
                                onChange={(e) => { setObservacoes(e.target.value) }}
                                placeholder="Existe alguma ?"
                            />
                        </div>

                    </div>
                    <div className="section-lote">
                        {/* Lote */}
                        <label>Numero do lote</label>
                        <input type="number"
                            onChange={(e) => { setNLote(e.target.value) }}
                        />

                        <label>Numero da quadra</label>
                        <input type="number"
                            onChange={(e) => { setNQuadra(e.target.value) }}
                        />

                        <label>Bairro</label>
                        <input type="text"
                            placeholder="Qual o nome do bairro?"
                            onChange={(e) => { setBairro(e.target.value) }}
                        />

                        <label>Municipio</label>
                        <input type="text"
                            placeholder="Qual o nome do municipio?"
                            onChange={(e) => { setMunicipio(e.target.value) }}
                        />


                    </div>
                </div>

                <Link onClick={setData} className="icon">Adicionar</Link>

            </div>
        </Model>
    )
}