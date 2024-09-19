import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from './store/userSlice';

import Routes from './components/Routes';
import Spinner from './components/Spinner'

function App() {
	const [loading, setLoading] = useState(true);
	const [currentTheme, __] = useState(localStorage.getItem('theme'));

	const dispatch = useDispatch();

	const user =  useSelector(state => state.user);
	const theme =  useSelector(state => state.theme);

	console.log(user)
  	useEffect(() => {
    	// Função para detectar o tema
		if (!currentTheme) {
			localStorage.setItem('theme', 'light');
		}
		dispatch(getUserData());
		setLoading(false);
	}, []);

	if (user.status === 'loading' || loading) {
		return <div className={theme.theme}><Spinner /></div>
	}
	
  	return (
    	<div className={theme.theme}>
      		<Routes/>
    	</div>
  )
}

export default App;
