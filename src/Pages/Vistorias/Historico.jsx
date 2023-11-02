import styled from "styled-components"
import { Link } from "react-router-dom"
import { FiCheckCircle, FiXCircle } from "react-icons/fi"
import colors from "../../Utils/colors"
import Components from "../../Components"
import Lote1 from '../../Utils/Images/lote4.jpg'
import Lote2 from '../../Utils/Images/lote 2.jpg'
import Lote3 from '../../Utils/Images/lote 3.jpg'


const Model = styled.div`
    width: 100vw;
    height:max-content;;
    display: flex;
    justify-content: center;
    
    .body{
        .title{
            margin: 10px;
        }
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: start;
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
        .item{
            width: 30%;
            
           
        }
        .item:last-child{
            width:20%;
        }
        .btn{
            padding: 10px;
            background-color: ${colors.Blue};
            color:white;
            border-radius: 10px;
            transition: all .2s ease-in-out;

            &:hover{
                padding: 12px;
                background-color: ${colors.Red};
                transition: all .2s ease-in-out;
            }
        }
        
        
    }
     .caso{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: start;
        justify-content: start;
        .img{
            width: 100%;
            height: 10vh;
            display: flex;
            align-items: center;
            flex: 1;
            flex-flow: 3;
            img{
                margin: 10px;
                width: 90%;
                height: 30vh;
                border-radius: 10px;
                }
        }
        
            .info{
                margin: 25px 0 ;
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                .card{
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: space-evenly;
         
            width: 30%;
            height: 150px;
            border:solid 1px ${colors.Blue};
            border-radius: 10px;
            .bold{
                font-weight: 600;
            }

        }
            }
        .outras{
            width: 90%;
            display: flex;
            text-align: center;
            align-items: start;
            justify-content: start;

            .card{
                width: 30%;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: center;
                .item{
                    font-size: 14pt;
                    margin: 5px;
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    width: 50%;
                    height: 40px;
                    border-bottom: solid 1px blue;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }



        }


}



`
export default function Resumo(props) {


    return (<Model>
        <Components.Sidebar />
        <Components.MenuHistorico />
        <div className="body">

            <div className="header">

                <div className="item">
                    <h2>
                        ?
                    </h2>
                    <h3>?</h3>
                </div>

                <div className="item">
                    <h2>
                        Data solicitação:
                    </h2>
                    <h3>10/10/2023</h3>

                </div>


                <div className="item">
                    <h2>
                        Data conclusão:
                    </h2>
                    <h3>10/10/2023</h3>

                </div>

                <Link className="item">
                    <div className="btn">
                        Reabrir caso
                    </div>
                </Link>
            </div>
            <div className="caso">
                <div className="img">
                    <div className="image">
                        <Link to={Lote1}>
                            <img src={Lote1} alt="" />
                        </Link>
                    </div>
                    <div className="image">
                        <Link to={Lote2}>
                            <img src={Lote2} alt="" />
                        </Link>
                    </div>
                    <div className="image">
                        <Link to={Lote3}>
                            <img src={Lote3} alt="" />
                        </Link>
                    </div>


                </div>
                <h1 className=" title">
                    Observação do vistoriador:
                </h1>
                <div className="info">
                    <div className="card">
                        <h1></h1>
                        <p className="bold">Solicitante: Monica</p>
                        <p className="bold">Motivo da vistoria: Compra</p>
                        <p className="bold">Vistoriador: Eduardo</p>
                        <p className="bold">Motivo da vistoria: Compra</p>

                    </div>
                    <div className="card">
                        <h1>Informações do lote</h1>
                        <p className="bold">N° do lote: 10</p>
                        <p className="bold">N° da quadra: 10</p>
                        <p className="bold">Bairro: Estrela do Sul </p>
                        <p className="bold">Municipio: Mateus Leme </p>

                    </div>
                    <div className="card">
                        <h1>Classificação do lote</h1>
                        <p className="bold">Geral: A+</p>
                        <p className="bold">Topografia: B</p>
                        <p className="bold">Rua: C </p>
                        <p className="bold">Água: A </p>
                        <p className="bold">Luz: C </p>

                    </div>
                </div>
                <h1 className="title">Outras informações</h1>
                <div className="outras">
                    <div className="card">
                        <div className="item">
                            <h3>Agua</h3>
                            <FiCheckCircle />
                        </div>
                        <div className="item">
                            <h3>Luz</h3>
                            <FiCheckCircle />
                        </div>
                        <div className="item">
                            <h3>Esgoto</h3>
                            <FiXCircle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Model>)
}