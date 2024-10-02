import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Scene1 from './pages/scenes/Scene1.tsx';
import Scene2 from './pages/scenes/Scene2.tsx';
import Scene3 from './pages/scenes/Scene3.tsx';
import Scene4 from './pages/scenes/Scene4.tsx';
import Scene5 from './pages/scenes/Scene5.tsx';
import Quiz1 from './pages/quiz/Quiz1.tsx';
import Quiz2 from './pages/quiz/Quiz2.tsx';
import Quiz3 from './pages/quiz/Quiz3.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Scene1 />,
      },
      {
        path: '/scene2',
        element: <Scene2 />,
      },
      {
        path: '/scene3',
        element: <Scene3 />,
      },
      {
        path: '/scene4',
        element: <Scene4 />,
      },
      {
        path: '/scene5',
        element: <Scene5 />,
      },
      {
        path: '/quiz1',
        element: <Quiz1 />,
      },
      {
        path: '/quiz2',
        element: <Quiz2 />,
      },
      {
        path: '/quiz3',
        element: <Quiz3 />,
      }
    ]
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
