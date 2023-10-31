import styled from "styled-components"
import Components from "../Components"
import colors from "../Utils/colors"



const Model = styled.div`
    width: 100vw;
    display: flex;
    text-align: center;
    align-items: start;
    justify-content: center;
    .body{
        width: 100%;
        .header{
            font-size: 18pt;
        }
        .form{
            margin: 0 auto;
            width: 80%;
            background-color: ${colors.Green};
            padding: 20px;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
           
            
        }
    }
    


`
export default function VistoriasAdd(props) {

    return (
        <Model>
            <Components.Sidebar />
            <div className="body">
                <div className="header">
                    Nova solicitação
                </div>
                <div className="form">
                    <div className="title">
                        Preencha as informações abaixo
                    </div>

                    <div className="section row">
                        <label>Seu nome</label>
                        <input type="text"
                            placeholder="Insira seu nome aqui"
                        />



                        <label>Motivo</label>
                        <input type="text"
                            placeholder="Qual o motivo da vistoria?"
                        />


                    </div>
                    <div className="section col">
                        {/* Lote */}
                        <label>Numero do lote</label>
                        <input type="number"

                        />



                        <label>Numero da quadra</label>
                        <input type="number"

                        />

                        <label>Bairro</label>
                        <input type="text"

                        />

                        <label>Municipio</label>
                        <input type="text"

                        />


                    </div>
                </div>
            </div>
        </Model>
    )
}