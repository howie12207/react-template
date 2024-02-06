import { useRef, useEffect, lazy, Suspense } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    useLocation,
    useOutlet,
    useNavigate,
} from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { setNavigate } from '@/utils/navigateHelper';

// import { useAppDispatch } from '@/app/hook';

import GoTop from '@/components/goTop/GoTop';
import LoadingFull from '@/components/loadingFull/LoadingFull';

const App = () => {
    // const dispatch = useAppDispatch();
    // useEffect(() => {}, [dispatch]);

    const Root = () => {
        // navigate without hooks
        const navigate = useNavigate();
        setNavigate(navigate);

        const location = useLocation();
        const outlet = useOutlet();
        const emptyRef = useRef(null);
        const { nodeRef } = routes.find(route => route.path === location.pathname) ?? {
            nodeRef: emptyRef,
        };

        // Title handle
        useEffect(() => {
            const pathname = location.pathname;
            const title = routes.find(route => route.path === pathname)?.title || '錯誤頁';
            document.title = `${title}`;
        }, [location.pathname]);

        // BfCache
        useEffect(() => {
            const handleBfCache = (e: PageTransitionEvent) => {
                if (e.persisted) window.location.reload();
            };
            window.addEventListener('pageshow', handleBfCache);
            return () => {
                window.removeEventListener('pageshow', handleBfCache);
            };
        }, []);

        return (
            <>
                <SwitchTransition>
                    <CSSTransition
                        key={location.pathname}
                        nodeRef={nodeRef}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                    >
                        <Suspense>
                            <main ref={nodeRef}>{outlet}</main>
                        </Suspense>
                    </CSSTransition>
                </SwitchTransition>

                <GoTop />
                <LoadingFull />
            </>
        );
    };

    const Home = lazy(() => import('@/pages/home'));
    const Error = lazy(() => import('@/pages/error'));

    const routes = [
        { path: '/', Component: Home, title: '首頁', nodeRef: useRef(null) },

        { path: '*', Component: Error, nodeRef: useRef(null) },
    ];
    const router = createBrowserRouter(
        [
            {
                path: '/',
                Component: Root,
                children: routes,
            },
        ],
        { basename: import.meta.env.VITE_BASE_URL },
    );

    return <RouterProvider router={router} />;
};

export default App;
