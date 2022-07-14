import { lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Home = lazy(() => import('@/views/home/MainPage'));
const Test = lazy(() => import('@/views/test/MainPage'));

function DefaultLayout() {
    const location = useLocation();

    return (
        <>
            <div className="bg-yellow-500">layout</div>
            {/* TODO 使用strict 會有報錯 */}
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/test" element={<Test />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
}

export default DefaultLayout;
