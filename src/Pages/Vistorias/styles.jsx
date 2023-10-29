import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import colors from "../../Utils/colors";
import { FiAlertTriangle } from "react-icons/fi";


export const Menu = () => {
    const Model = styled.div`
        width: 8vw;
        height: 100vh;
        background-color: ${colors.Grey};
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: space-evenly;
        z-index: 1;
        box-shadow: 1px 1px 10px black;



        .item{
        margin: 10px;
        width: 100px;
        padding: 10px;
        font-size: 22pt;
    }
    
    `

    return (<Model>
        <Link to={'/vistorias'} className="item">
            <FiAlertTriangle />
        </Link>
        <Link className="item">2</Link>
        <Link className="item">3</Link>
        <Link className="item">4</Link>
        <Link className="item">5</Link>
    </Model>)
}

export const RowCards = () => {
    const Model = styled.div`
    width: 80%;
    height: 30vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    
    .item{
        width: 25%;
        padding: 20px;
        font-size: 18pt;
        border-radius: 10px;
        border: solid 1px black;


        background-color: #fff;
    }
    
    `


    return (
        <Model>

            <div className="item">
                <div className="text">
                    Esmeraldas
                </div>
                <div className="value">
                    999
                </div>
            </div>


            <div className="item">
                <div className="text">
                    Mateus Leme
                </div>
                <div className="value">
                    999
                </div>
            </div>


            <div className="item">
                <div className="text">
                    Jabotiicatubas
                </div>
                <div className="value">
                    999
                </div>
            </div>


        </Model>
    )
}

export const ListPendentes = () => {
    const Model = styled.div`
    padding: 25px;
    width: 80%;
    border: solid 1px black;
    border-radius: 20px;
    box-shadow: 1px 5px 10px black;
    background-color: ${colors.Grey};
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: start;

    .item{
        background-color: #fff;
        margin-top: 10px;
        padding: 5px;
        width: 99%;
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        }
        
        .a{
            width: 25%;
            padding: 5px;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
            justify-content: center;
            border-right: .1px black solid;
            
            
        }
        .a:last-child{
            border-right: none;
        }
        .a.data{

           
        }
    
    
    
    `

    return (
        <Model>
            <div className="title">
                Vistorias pendentes
            </div>
            <Link className="item">
                <div className="a">Solicitante</div>
                <div className="a">Data da solicitacao</div>
                <div className="a">Municipio</div>
                <div className="a">Bairro</div>
            </Link>
            <Link className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
            </Link>
            <Link className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
            </Link>



        </Model>
    )
}