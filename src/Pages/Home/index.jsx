import styled from 'styled-components'
import Components from '../../Components'
const Model = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

`

export default function Home(props) {

    return (
        <Model>
            <Components.Sidebar />
        </Model>
    )
}