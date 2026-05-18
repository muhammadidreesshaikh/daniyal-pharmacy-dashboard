import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoadingScreen } from './components/common/LoadingScreen';
import { AppRouter } from './routes/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen fullScreen />}> 
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}