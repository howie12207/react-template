import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Test() {
    useEffect(() => {
        document.title = 'Test';
    }, []);

    return (
        <div className="min-h-screen bg-red-500">
            <div>this is test page</div>
            <Link to="/">home</Link>
        </div>
    );
}

export default Test;
