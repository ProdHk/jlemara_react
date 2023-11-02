import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../Utils/colors";



export default function RowPendenciasM() {

    const Model = styled.div`
    width: 80%;
    height: 30vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    
    .item{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 150px;
        padding: 20px;
        font-size: 18pt;
        border-radius: 10px;
        border: solid 2px ${colors.Blue};
        height: 100px;
        background-color: #fff;
        &:hover{

            box-shadow: 1px 1px 5px #00000045;

            transition: all .2s ease-in-out;

        }
    }
    
    `


    return (
        <Model>

            <Link className="item">
                <div className="text">
                    <h2>Esmeraldas</h2>
                </div>
                <div className="value">
                    <h3>999</h3>
                </div>
            </Link>


            <Link className="item">
                <div className="text">
                    <h2>Mateus Leme</h2>
                </div>
                <div className="value">
                    <h3>999</h3>
                </div>
            </Link>


            <Link className="item">
                <div className="text">
                    <h2>Betim</h2>
                </div>
                <div className="value">
                    <h3>999</h3>
                </div>
            </Link>


        </Model>
    )
}