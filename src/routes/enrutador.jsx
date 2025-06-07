import Home from '../Home'
import Login from '../pages/Login'
import NotasPage from '../pages/Notas'
import ExamPage from '../pages/Examenes'

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
{
    path: '/examenes',
    element:<ExamPage />
}


]



