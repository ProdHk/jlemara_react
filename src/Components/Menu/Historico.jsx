import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../Utils/colors";
import { FiShoppingBag, FiFileText, FiFilePlus } from "react-icons/fi";



export default function MenuVistorias(props) {
    const Model = styled.div`
        width: 20vw;
        flex-grow: 1;
        background-color: ${colors.Grey2};
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: start;
        z-index: 1;
        padding: 10px;


        .item{
        width: 100%;
        height: 100px;
        color: ${colors.Grey};
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: start;
        justify-content: space-evenly;
        border-bottom: 1px solid #0000001a;
        transition: all .2s ease-in-out;
        .title{
            font-size: 12pt;
            }
            .sub-title{
                font-size: 10pt;
            }
            .obs{
                font-size: 10pt;
            }
        &:hover{
            border-bottom: 1px solid #0000007f;
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
            <h2 className="title">Lote 10 Quadra 10</h2>
            <h3 className="sub-title">Estrela do sul - Mateus Leme</h3>
            <p className="obs">Urgencia</p>
        </Link>

        <Link to={'/vistorias/historico'} className="item">
            <h2 className="title">Lote 10 Quadra 10</h2>
            <h3 className="sub-title">Estrela do sul - Mateus Leme</h3>
            <p className="obs">Urgencia</p>
        </Link>

        <Link to={'/vistorias/historico'} className="item">
            <h2 className="title">Lote 10 Quadra 10</h2>
            <h3 className="sub-title">Estrela do sul - Mateus Leme</h3>
            <p className="obs">Urgencia</p>
        </Link>

        <Link to={'/vistorias/historico'} className="item">
            <h2 className="title">Lote 10 Quadra 10</h2>
            <h3 className="sub-title">Estrela do sul - Mateus Leme</h3>
            <p className="obs">Urgencia</p>
        </Link>



    </Model>)
}