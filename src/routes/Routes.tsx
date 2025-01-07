import { Routes as ReactRouters, Route } from 'react-router-dom';
import MainPage from '../pages/main/Main';
import Header from '../components/header/Header';

function Routes() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <Header />
      <main className="flex-grow pt-36 pb-12 sm:pt-20 lg:pt-36 xl:pt-40 sm:px-6 max-w-6xl mx-auto">
        <ReactRouters>
          <Route path="/" element={<MainPage />} />
        </ReactRouters>
      </main>
    </div>
  );
}

export default Routes;
