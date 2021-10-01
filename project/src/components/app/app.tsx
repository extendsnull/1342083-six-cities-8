import MainScreen from '../main-screen/main-screen';
import type {OffersPreviews} from '../../types';

type AppProps = {
  offers: OffersPreviews;
}

function App(props: AppProps): JSX.Element {
  return <MainScreen offers={props.offers} />;
}

export default App;
