import styled from "styled-components"
import { Link } from "react-router-dom"
import { FiPlus } from "react-icons/fi"
import colors from "../../Utils/colors"
import Components from "../../Components"

const Model = styled.div`
    width: 100vw;
    display: flex;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: start;
    
    .header{
        display: flex;
        width: 100%;
        height: 12vh;
        padding: 15px;

        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${colors.Grey};
        .title{
            width: 25%;
           h1{
             font-weight: 600;
           }
        }
        .src{
            width: 45%;
            
            input{
                width: 60%;
                padding: 8px;
                border-radius: 20px;
                border: ${colors.Grey} 1px solid;
            }
        }
        .addNew{
            background-color: ${colors.Blue};
            color: #FFF;
            padding: 10px;
            width: 15%;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: space-evenly;
            border-radius: 10px;
        }
    }

    
`
export default function Resumo(props) {


    return (<Model>
        <div className="header">
            <div className="title">
                <h1>
                    Resumo
                </h1>
            </div>
            <div className="src">
                <input type="text" className="search" />
            </div>
            <Link className="addNew">
                <FiPlus />
                <p className="button">Adicionar</p>
            </Link>
        </div>
        <Components.RowPendenciasM />
        <Components.ListVistorias />
    </Model>)
}