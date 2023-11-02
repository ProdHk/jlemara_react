import { createBrowserRouter } from "react-router-dom";
import Pages from '../Pages'

export const routes = createBrowserRouter([
    {

        path: '/',
        element: <Pages.Home />

    },
    {
        path: '/vistoria:id',
        element: <>Vistorias</>
    },
    {
        path: '/vistorias',
        element: <Pages.Vistorias />
    },
    {
        path: '/vistorias/adicionar',
        element: <Pages.VistoriasAdd />
    },
    {
        path: '/vistorias/concluir',
        element: <Pages.VistoriasConcluir />
    },
    {
        path: '/vistorias/historico',
        element: <Pages.Historico />
    },

]
)

