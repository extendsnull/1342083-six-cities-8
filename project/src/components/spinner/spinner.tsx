import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spinner(): JSX.Element {
  return (
    <Loader
      type="Oval"
      color="#4481c3"
      height={100}
      width={100}
    />
  );
}
