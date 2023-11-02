import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../Utils/colors";
import { FiShoppingBag, FiFileText, FiFilePlus } from "react-icons/fi";



export default function MenuVistorias(props) {
    const Model = styled.div`
        width: 8vw;
        flex-grow: 1;
        background-color: ${colors.Grey2};
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: start;
        z-index: 1;


        .item{
            margin-top: 50px;
        margin: 10px;
        width: 100px;
        padding: 10px;
        font-size: 22pt;
        color: ${colors.Grey};
        transition: all .2s ease-in-out;

        &:hover{
            color: ${colors.Grey3};
        transition: all .2s ease-in-out;


        }
        .text{
            font-size: 10pt;
            font-weight: 700;
        }
    }
    
    `

    return (<Model>
        <Link to={'/vistorias/historico'} className="item">
            <FiShoppingBag />
            <p className="text">historico</p>


        </Link>
        <Link to={'/vistorias/adicionar'} className="item">
            < FiFilePlus />
            <p className="text">solicitacao</p>
        </Link>
        <Link to={'/vistorias/concluir'} className="item">
            < FiFileText />
            <p className="text">laudo</p>
        </Link>

    </Model>)
}