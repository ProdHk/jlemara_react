import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../Utils/colors";
import { FiCheckSquare } from "react-icons/fi";


const Model = styled.div`
 width: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: start;

    .title{
        padding: 10px;
    }
    .th{
            width: 100%;
            padding: 5px;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            border-bottom: 1px solid ${colors.Grey};

            
            
        }
    .item{
        border-bottom: 1px solid ${colors.Grey};
        margin-top: 10px;
        padding: 5px;
        width: 100%;
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;
        transition: all .2s ease-in-out;
        &:hover{
            box-shadow: 1px 1px 5px #00000045;
            padding: 10px;
            transition: all .2s ease-in-out;
        }
        .btn{
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            color: white;
            width: 50px;
            height: 15px;
            border-radius: 10px;
            background-color: ${colors.Blue};
            padding: 15px;
            &:hover{
                color: ${colors.Black};
                background-color: ${colors.Orange}
            }
        }
        }
        
        
        .a{
            width: 25%;
            padding: 5px;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
            justify-content: center;
            
            
        }
        .a:last-child{
            border-right: none;
        }
        .a.data{

           
        }
    
    
`


export default function ListPendencias(props) {

    return (
        <Model>
            <div className="title">
                <h1> Vistorias pendentes</h1>
            </div>
            <div className="th">
                <div className="a">Solicitante</div>
                <div className="a">Data da solicitacao</div>
                <div className="a">Municipio</div>
                <div className="a">Bairro</div>
                <div className="a">Executar</div>
            </div>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
            <Link to={`/vistoria/${0}`} className="item data" >
                <div className="a">Ivan Dias</div>
                <div className="a">10/10/2023</div>
                <div className="a">Mateus Leme</div>
                <div className="a">Paraiso</div>
                <div className="a">
                    <Link className="btn" >
                        <FiCheckSquare />
                    </Link>
                </div>

            </Link>
        </Model>
    )
}