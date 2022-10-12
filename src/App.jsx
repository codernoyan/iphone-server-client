/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Phone from './components/Phone';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: () => fetch('http://localhost:5000/phones/'),
        },
        {
          path: '/phones/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`),
          element: <Phone />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
