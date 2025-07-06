import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { JSX, lazy, Suspense } from "react";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Services = lazy(() => import("../pages/Services"));
const NotFound = lazy(() => import("../pages/NotFound"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));

/* هي الدالة تغلف المكونات التي  تم تحميلها بشكل كسول */
const withSuspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
    <Suspense fallback={<div className="text-center">جاري التحميل...</div>}>
      <Component />
    </Suspense>
  );
/* جميع المسارات الاساسية و الفرعية في هذا الملف تكون  */
const router = createBrowserRouter([
    {
        path : '/' ,
        element : <MainLayout/>,
        children:
        [
            {
                index : true, /* يعني المسار الاول رح يكون الصفحة الاساسية بشكل افتراضي بس يفتح الموقع */
                element: withSuspense(Home),
            },
            {
                path : '/about',
                element: withSuspense(About),
            },
            {
                path : '/contact',
                element: withSuspense(Contact),
            },
            {
                path : '/services',
                element: withSuspense(Services),
            },

        ]
    },
    {
        path: "*", /* في حالة لم يتطابق المسار مع أي من المسارات المحددة */
        element: withSuspense(NotFound),
    },
    {
        path : '/auth/:formType',
        element : withSuspense(AuthLayout)
    }
]);

export default router;
