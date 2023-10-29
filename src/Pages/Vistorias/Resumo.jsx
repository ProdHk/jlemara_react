import styled from "styled-components"
import { ListPendentes, RowCards } from "./styles"

const Model = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: start;
    

    .title{
        margin-top: 10px;
        font-size: 22pt;
    }
`
export default function Resumo(props) {


    return (<Model>
        <div className="header">
            <div className="title">
                Resumo de Vistorias
            </div>
        </div>
        <RowCards />
        <ListPendentes />
    </Model>)
}