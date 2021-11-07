import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SPINNER_SIZE = 100;

function Spinner(): JSX.Element {
  return (
    <Loader type="Oval" color="#4481c3" height={SPINNER_SIZE} width={SPINNER_SIZE} />
  );
}

export default Spinner;
