import { useRoutes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Appointment, Receipt, Treatment, Patients } from './pages';

export default function Router() {
    return useRoutes([
        {
            element: <Sidebar />,
            children: [
                { path: '/', element: <Appointment /> },
                { path: '/ds-dat-kham', element: <Appointment /> },
                { path: '/kham-benh', element: <Treatment /> },
                { path: '/hoa-don', element: <Receipt /> },
                { path: '/benh-nhan', element: <Patients /> },
            ]
        }
    ])
}