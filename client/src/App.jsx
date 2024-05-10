import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index/Index';
import NotFound from './pages/NotFound/NotFound';
import Uzupelnianie from './pages/Uzupelnianie/Uzupelnianie';
import Elementle from './pages/Elementle/Elementle';
import O_nas from './pages/O_nas/O_nas';
import Ranking from "./pages/Ranking/Ranking"
import Ustawienia from "./pages/Ustawienia/Ustawienia"
import Profil from "./pages/Profil/Profil"
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
