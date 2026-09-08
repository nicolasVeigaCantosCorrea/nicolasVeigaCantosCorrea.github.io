import { AppRouter } from '@/app/router/index';
import Navbar from '@/components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
