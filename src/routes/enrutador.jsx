import Home from '../Home'
import Login from '../pages/Login'
import NotasPage from '../pages/Notas'

export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
      
    {
        path: '/notas',
        element: <NotasPage />
    },



]



