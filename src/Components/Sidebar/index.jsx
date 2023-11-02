import styled from "styled-components"

import Colors from '../../Utils/colors'
import { Link } from "react-router-dom"
import { FiHome, FiFlag, FiUser, FiLogOut } from "react-icons/fi";
import colors from "../../Utils/colors";

export default function Sidebar() {

    const Model = styled.div`
    padding-top: 30px;
    width: 6vw;
    margin-right: 1px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: start;
    height: 100vh;
    font-size: 18pt;
    transition: all .2s ease-in-out ;
    border-rigth: solid 1px  #0000003e;


    `

    const Menu = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
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