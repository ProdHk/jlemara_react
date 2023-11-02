import styled from 'styled-components'
import Components from '../../Components'
import Resumo from './Resumo'

const Model = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;

`

export default function Vistorias(props) {

    return (
        <Model>
            <Components.Sidebar />
            <Components.MenuVistorias />

            <Resumo />
        </Model>
    )
}