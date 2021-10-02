import MainScreen from '../main-screen/main-screen';
import type {Offer} from '../../types';

type AppProps = {
  offers: Offer[];
}

function App(props: AppProps): JSX.Element {
  return <MainScreen offers={props.offers} />;
}

export default App;
