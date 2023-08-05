import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from './store/userSlice';

import Routes from "./components/Routes";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const user =  useSelector(state => state.user);

  useEffect(() => {
    console.log('Routes')
    if (user.status === 'idle') {
      dispatch(getUserData())
        .finally(() => {
          setLoading(false)
        })
    }
  }, [])

  return loading ?
  <div className="bg-gray-800 h-screen">
    <div class="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    </div>
  </div> : <Routes />
}

export default App;
