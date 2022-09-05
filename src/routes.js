import { useRoutes } from 'react-router-dom';
import SidebarStaff from './components/SidebarStaff';
import { Appointment, Receipt, Treatment, Patients } from './pages';
import RequireAuth from './components/RequireAuth';
import Login from './components/Login';
import SidebarDentist from './components/SidebarDentist';

export default function Router() {
    return useRoutes([
        {
            path: '/staff',
            element: <RequireAuth allowedRoles={["staff"]} />,
            children: [
                {
                    element: <SidebarStaff />,
                    children: [

                        { path: 'ds-dat-kham', element: <Appointment /> },
                        { path: 'kham-benh', element: <Treatment /> },
                        { path: 'hoa-don', element: <Receipt /> },
                        { path: 'benh-nhan', element: <Patients /> },
                    ]
                }
            ]
        },
        {
            path: '/dentist',
            element: <RequireAuth allowedRoles={["dentist"]} />,
            children: [
                {
                    element: <SidebarDentist />,
                    children: [
                        { path: 'kham-benh', element: <Treatment /> },
                    ]
                }
            ]
        },
        { path: '/login', element: <Login /> }


    ])
}