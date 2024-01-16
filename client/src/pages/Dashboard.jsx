import Header from '../components/Header';
import Home from '../components/Home';
import Navigation from '../components/Navigation';

export default function Dashboard() {
    return (
        <div id="dashboard">
            <Navigation />
            <main>
                <Header />
                <Home />
            </main>
        </div>   
    );
};