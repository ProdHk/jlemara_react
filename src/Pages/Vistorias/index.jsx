import styled from 'styled-components'
import Components from '../../Components'
import { Menu } from './styles'
import Resumo from './Resumo'

const Model = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

`

export default function Vistorias(props) {

    return (
        <Model>
            <Components.Sidebar />
            <Menu />

            <Resumo />
        </Model>
    )
}