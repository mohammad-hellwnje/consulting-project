
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import './App.css'
import router from './routes';

// إنشاء كائن QueryClient
const queryClient = new QueryClient();

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // تخصيص التصميم
        className: '',
        duration: 4000,
        style: {
          background: '#363636',
          color: '#fff',
          fontFamily: 'inherit',
          fontSize: '14px',
          borderRadius: '8px',
          padding: '12px 16px',
        },
        // تخصيص الألوان
        success: {
          duration: 3000,
          style: {
            background: '#10B981',
          },
        },
        error: {
          duration: 4000,
          style: {
            background: '#EF4444',
          },
        },
      }}
    />
  </QueryClientProvider>
  )
}

export default App
