import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const DefaultLayout = lazy(() => import('@/layout/DefaultLayout'));
const Login = lazy(() => import('@/views/login/MainPage'));

function App() {
    const isLogin = true;

    return (
        <Router>
            <Suspense>
                {isLogin ? (
                    <DefaultLayout />
                ) : (
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                )}
            </Suspense>
        </Router>
    );
}

export default App;
