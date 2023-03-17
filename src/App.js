import './App.css';
import { heroesFetching, heroesFetched, heroesFetchingError } from './redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const {heroesLoadingStatus} = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(heroesLoadingStatus)
  return (
    <div>
      <button onClick={() => dispatch(heroesFetching())}>HEROES_FETCHING</button>
      <br />
      <button onClick={() => dispatch(heroesFetched())}>HEROES_FETCHED</button>
      <br />
      <button onClick={() => dispatch(heroesFetchingError())}>HEROES_FETCHING_ERROR</button>
    </div>
  )
}

export default App;
