import Header from '../header/header';
import Tabs from '../tabs/tabs';
import Cities from '../cities/cities';

function MainScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header hasNav />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Cities />
      </main>
    </div>
  );
}

export default MainScreen;
