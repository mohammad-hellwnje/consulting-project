import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { JSX, lazy, Suspense } from "react";
import OverView from "../pages/DashPages/OverView";
import CoursesAdmin from "../pages/DashPages/CoursesAdmin";
import WorkshopAdmin from "../pages/DashPages/WorkshopAdmin";
import AddWorkshop from "../pages/DashPages/AddWorkshop";
import EditWorkshop from "../pages/DashPages/EditWorkshop";
import FnjanAdmin from "../pages/DashPages/FnjanAdmin";
import AddFnjan from "../pages/DashPages/AddFnjan";
import EditFnjan from "../pages/DashPages/EditFnjan";
import AddInPersonCourse from "../pages/DashPages/AddInPersonCourse";
import EditInPersonCourse from "../pages/DashPages/EditInPersonCourse";
const Consulting = lazy(() => import("../pages/ServicesPages/Consulting"));
const Fnjan = lazy(() => import("../pages/ServicesPages/Fnjan"));
const Workshops = lazy(() => import("../pages/ServicesPages/Workshops"));
const Spinner = lazy(() => import("../components/Spinner/Spinner"));
const Courses = lazy(() => import("../pages/ServicesPages/Courses"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
// const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Servdetails = lazy(() => import("../pages/DetailsPage/DetailsPage"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
const ForgitPassword = lazy(() => import("../auth/ForgitPassword"));
const ResetPassword = lazy(() => import("../auth/ResetPassword"));
const Podacst = lazy(() => import("../pages/Podacst"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const ProtectedRoute = lazy(
  () => import("../components/ProtectedRoute/ProtectedRoute")
);
/* هي الدالة تغلف المكونات التي  تم تحميلها بشكل كسول */
const withSuspense = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => (
  <Suspense
    fallback={
      <div className="text-center">
        <Spinner />
      </div>
    }
  >
    <Component />
  </Suspense>
);
/* جميع المسارات الاساسية و الفرعية في هذا الملف تكون  */
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:
          true /* يعني المسار الاول رح يكون الصفحة الاساسية بشكل افتراضي بس يفتح الموقع */,
        element: withSuspense(Home),
      },
      {
        path: "/about",
        element: withSuspense(About),
      },
      // {
      //     path : '/contact',
      //     element: withSuspense(Contact),
      // },
      {
        path: "/podacst",
        element: withSuspense(Podacst),
      },
      {
        path: "/servdetails/:id",
        element: withSuspense(Servdetails),
      },
    ],
  },
  {
    path: "*" /* في حالة لم يتطابق المسار مع أي من المسارات المحددة */,
    element: withSuspense(NotFound),
  },
  {
    path: "/auth/:formType",
    element: withSuspense(AuthLayout),
  },
  {
    path: "/resetPassword",
    element: withSuspense(ForgitPassword),
  },
  {
    path: "/reset-password",
    element: withSuspense(ResetPassword),
  },
  {
    path: "/consulting",
    element: withSuspense(Consulting),
  },
  {
    path: "/fnjan-qhwa",
    element: withSuspense(Fnjan),
  },
  {
    path: "/workshops",
    element: withSuspense(Workshops),
  },
  {
    path: "/courses",
    element: withSuspense(Courses),
  },

  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<div className="text-center">جاري التحميل...</div>}>
        <ProtectedRoute requireAdmin={true}>
          <Dashboard />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <OverView />,
        index: true,
      },
      {
        path: "coursesAdmin",
        element: <CoursesAdmin />,
      },
      {
        path: "workshopAdmin",
        element: <WorkshopAdmin />,
      },
      {
        path: "fnjanAdmin",
        element: <FnjanAdmin />,
      },
      {
        path: "addworkshop",
        element: <AddWorkshop />,
      },
      {
        path: "editworkshop/:id",
        element: <EditWorkshop />,
      },
      {
        path: "addfnjan",
        element: <AddFnjan />,
      },
      {
        path: "editfnjan/:id",
        element: <EditFnjan />,
      },
      {
        path: "addinpersoncourse",
        element: <AddInPersonCourse />,
      },
      {
        path: "editinpersoncourse/:id",
        element: <EditInPersonCourse />,
      },
    ],
  },
]);

export default router;
