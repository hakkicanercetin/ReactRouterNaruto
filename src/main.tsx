import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.tsx';
import CharacterPage from './routes/CharacterPage.tsx';
import { RootLayout } from './routes/Root.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './routes/home.tsx';
import Characters from './routes/Characters.tsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import "./style.css"
const router = createBrowserRouter([
    { 
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
              errorElement: <ErrorPage />,
              children:[
                {
                  index: true,
                  element: <Home/>,
                },
                {
                  path: "/characters",
                  children: [
                    {
                        index: true,
                        element: <Characters/>
                    },
                    {
                        path: ":id",
                        element: <CharacterPage/>
                    }
                  ]
                },]
            }
        ]
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </React.StrictMode>
)
