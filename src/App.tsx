import { AppRouter } from '@/app/router/index';
import Navbar from '@/components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
