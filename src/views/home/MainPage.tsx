import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div className="min-h-screen bg-blue-500">
            <div>this is home page</div>
            <Link to="/test">test</Link>
        </div>
    );
}

export default Home;
