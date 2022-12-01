import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import ClockPage from './pages/ClockPage';
import Help from './pages/Help';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/help',
    element: <Help />
  },
  {
    path: '/clock',
    element: <ClockPage />
  },
  {
    path: '/tasks',
    element: <Tasks />
  }
])

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App;