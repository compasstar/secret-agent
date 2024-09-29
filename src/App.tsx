import './App.css'
import Header from './components/Header.tsx';
import { Outlet } from 'react-router-dom';

export default function App() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

