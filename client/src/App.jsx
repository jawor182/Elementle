import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index/Index';
import NotFound from './pages/NotFound/NotFound';
import Uzupelnianie from './pages/Uzupelnianie/Uzupelnianie';
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
        {
            path: '/uzupelnianie',
            element: <Uzupelnianie />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
