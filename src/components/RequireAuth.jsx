import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
    if (!localStorage.getItem("role"))
        localStorage.setItem('role', 'staff')
    const role = localStorage.getItem('role')
    // console.log(role);
    const location = useLocation();

    return (
        allowedRoles?.includes(role)
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />

    );
}

export default RequireAuth;