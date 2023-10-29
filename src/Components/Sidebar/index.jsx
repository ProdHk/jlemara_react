import styled from "styled-components"

import Colors from '../../Utils/colors'
import { Link } from "react-router-dom"
import { FiHome, FiFlag, FiUser, FiLogOut } from "react-icons/fi";
import colors from "../../Utils/colors";

let Model
export default function Sidebar() {

    Model = styled.div`
    background-color: ${colors.Grey};
    border-right: 1px solid #00000026;
    padding-top: 30px;
    width: 6vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: start;
    height: 100vh;
    font-size: 18pt;
    transition: all .2s ease-in-out ;
    box-shadow: 1px 5px 10px black;
    z-index: 2;

    `

    const Menu = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-items: center;
    justify-content: space-around;
        transition: all .2s ease-in-out ;


    .item{
        margin: 10px;
        width: 75%;
        padding: 5px;
            transition: all .2s ease-in-out ;

        &:hover{
        font-size: 25pt;
            transition: all .2s ease-in-out ;

    }

    }
    

`
    const Logo = styled.div`
    width: 50%;
    height: 10%;
    padding: 10px;
    background-color: blue;
`



    return (
        <Model>
            <Logo>
                <img src="" alt="" srcset="" />
            </Logo>
            <Menu>
                <Link to={'/'} className="item">
                    <FiHome />
                </Link>
                <Link to={'/vistorias'} className="item">
                    <FiFlag />
                </Link>
                <Link to={'/perfil'} className="item">
                    <FiUser />
                </Link>
                <Link to={'/sair'} className="item">
                    <FiLogOut />
                </Link>
            </Menu>


        </Model>)
}