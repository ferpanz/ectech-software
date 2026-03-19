import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

import SoporteHardware from "../pages/SoporteHardware";
import Contacto from "../pages/Contacto";
import SobreNosotros from "../pages/SobreNosotros";
import Productos from "../pages/Productos";
import Servidores from "../pages/Servidores";
import Networking from "../pages/Networking";
import DisenoGrafico from "../pages/DisenoGrafico";
import DisenoWeb from "../pages/DisenoWeb";
import VPNs from "../pages/VPNs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
        },
        {
            path: "/soporte-hardware",
            element: <SoporteHardware />
        },
        {
            path: "/contacto",
            element: <Contacto />
        },
        {
            path: "/sobre-nosotros",
            element: <SobreNosotros />
        },
        {
            path: "/productos",
            element: <Productos />
        },
        {
            path: "/servidores",
            element: <Servidores />
        },
        {
            path: "/networking",
            element: <Networking />
        },
        {
            path: "/diseno-grafico",
            element: <DisenoGrafico />
        },
        {
            path: "/diseno-web",
            element: <DisenoWeb />
        },
        {
            path: "/vpn",
            element: <VPNs />
        }
        ],
    },
    
]);
