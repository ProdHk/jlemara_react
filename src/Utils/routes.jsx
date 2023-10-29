import { createBrowserRouter } from "react-router-dom";
import Pages from '../Pages'

export const routes = createBrowserRouter([
    {

        path: '/',
        element: <Pages.Home />

    },
    {
        path: '/vistoria',
        element: <>Vistorias</>
    },
    {
        path: '/vistorias',
        element: <Pages.Vistorias />
    },
    {
        path: '/vistorias/adicionar',
        element: <>Adicionar Vistorias</>
    },
    {
        path: '/vistorias/concluir',
        element: <>Concluir Vistorias</>
    },
    {
        path: '/vistorias/historico',
        element: <>Vistorias Concluidas</>
    },

]
)

