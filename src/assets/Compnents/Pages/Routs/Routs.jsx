import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
import LodingSpiner from '../components/LoadingSpinner/LoadingSpinner';
import Apps from '../pages/Apps/Apps';
import Books from '../pages/Books/Books';


export const router = createBrowserRouter([
    {
      path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <LodingSpiner/>,
        
        children: [
            {
                index: true,
                path:"/",
                Component: Home,
                loader:()=>fetch('/booksData.json'),
            },
            {
                path: '/about',
                Component:Books
            },
            {
                path: '/apps',
                Component:Apps,
                loader:()=>fetch('/booksData.json'),
            },
            {
                path: '/readList',
                loader:()=>fetch('/booksData.json'),
                Component:ReadList
            },
            {
                path: '/bookDetails/:id',
                loader:()=>fetch('/booksData.json'),
                Component:BookDetails
            },
            {
                path: '/apps',
                Component: Books,
                loader: () => fetch('/booksData.json'),
}
      ]
    },
]);