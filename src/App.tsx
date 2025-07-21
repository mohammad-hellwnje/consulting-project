
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import router from './routes';

// إنشاء كائن QueryClient
const queryClient = new QueryClient();

function App() {
  return ( 
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
  )
}

export default App
