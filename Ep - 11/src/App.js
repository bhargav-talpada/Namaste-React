import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import ResturentMenu from "./components/ResturentMenu";


const Grocery = lazy(() => import("./components/Grocery") );

const App = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
                // element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurents/:resId',
                element: <ResturentMenu />
            },{
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <PageNotFound />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)