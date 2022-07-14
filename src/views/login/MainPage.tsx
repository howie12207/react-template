import { useEffect } from 'react';

function Login() {
    useEffect(() => {
        document.title = 'Login';
    }, []);

    return (
        <>
            <div>this is Login page</div>
        </>
    );
}

export default Login;
