import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from './store/userSlice';

import Routes from "./components/Routes";

function Spinner () {
  return (
    <div className="bg-gray-800 h-screen">
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    </div>
  </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, __] = useState(localStorage.getItem('theme'));

  const dispatch = useDispatch();

  const user =  useSelector(state => state.user);

  useEffect(() => {
    // Função para detectar o tema
    if (!theme) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    if (user.status === 'idle') {
      dispatch(getUserData(localStorage.getItem('accessToken')))
        .finally(() => {
          setLoading(false)
        })
    }
  }, [])

  return (
    <div className={user.theme}>
      {loading ? <Spinner/> : <Routes/>}
    </div>
  )
}

export default App;
