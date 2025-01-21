import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/authentication/LoginPage';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/authentication/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProtectedRoutes from '../components/accessControl/ProtectedRoutes';
import IsAuthenticated from '../components/accessControl/IsAuthenticated';
import PersistLogin from '../components/accessControl/PersistLogin';
import Unauthorized from '../pages/Unauthorized';
import AdminHome from '../pages/admin/AdminHome';
import CreateFormPage from '../pages/admin/CreateFormPage';
import AdminLayout from '../layouts/AdminLayout';
import AllEventsPage from '../pages/users/AllEventsPage';
import RegisterationForm from '../pages/users/RegisterationForm';
import AdminAllEvents from '../pages/admin/AdminAllEvents';
import AdminAllForms from '../pages/admin/AdminAllForms';
import FormResponses from '../pages/admin/FormResponses';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "login",
                element: (
                    <IsAuthenticated>
                        <LoginPage />
                    </IsAuthenticated>
                ),
            },
            {
                path: "register",
                element: (
                    <IsAuthenticated>
                        <RegisterPage />
                    </IsAuthenticated>
                ),
            },
            {
                path: "",
                element: <PersistLogin />,
                children: [
                    {
                        path: "/",
                        element: <ProtectedRoutes roles={['user','admin']} />,
                        children: [
                            {
                                path: "",
                                element: <HomePage />,
                            },
                            {
                                path: "all-events",
                                element: <AllEventsPage />,
                            },
                            {
                                path: "form/:formId",
                                element: <RegisterationForm />,
                            },
                        ],
                    },
                    {
                        path: "admin",
                        element: <AdminLayout />,
                        children: [
                            {
                                path: "",
                                element: <ProtectedRoutes roles={['admin']} />,
                                children: [
                                    {
                                        path: "",
                                        element: <AdminHome />,
                                    },
                                    {
                                        path: "create-form",
                                        element: <CreateFormPage />,
                                    },
                                    {
                                        path: "all-forms",
                                        element: <AdminAllForms />,
                                    },
                                    {
                                        path: "all-events",
                                        element: <AdminAllEvents />,
                                    },
                                    {
                                        path: "form-response/:formId",
                                        element: <FormResponses />,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                path: "unauthorized",
                element: <Unauthorized />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default router;
