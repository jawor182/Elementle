import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index/Index';
import NotFound from './pages/NotFound/NotFound';
import Znajdowanie from './pages/Znajdowanie/Znajdowanie';
import Uzupelnianie from './pages/Uzupelnianie/Uzupelnianie';
import Elementle from './pages/Elementle/Elementle';
import Ranking from "./pages/ranking/ranking"
import Ustawienia from "./pages/ustawienia/ustawienia"
import Profil from "./pages/profil/profil"
import O_nas from './pages/o_nas/o_nas';
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Index />,
        },
        {
            path: '/elementle',
            element: <Elementle />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
        {
            path: '/uzupelnianie',
            element: <Uzupelnianie />,
        },
        {
            path: '/znajdowanie',
            element: <Znajdowanie/>
        },
        {
            path:"/o_nas",
            element: <O_nas/>,
        },
        {
            path:"/ranking",
            element: <Ranking/>
        },
        {
            path:"/ustawienia",
            element: <Ustawienia/>
        },
        {
            path:"/profil",
            element:<Profil/>
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
