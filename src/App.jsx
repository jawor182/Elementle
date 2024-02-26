import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index/Index';
import NotFound from './pages/NotFound/NotFound';
import Elementle from './pages/Elementle/Elementle';
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
    ]);

    return <RouterProvider router={router} />;
}

export default App;
