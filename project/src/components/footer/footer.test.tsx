import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router as BrowserRouter} from 'react-router-dom';
import Footer from './footer';

const history = createMemoryHistory();

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const {container} = render(
      <BrowserRouter history={history}>
        <Footer />
      </BrowserRouter>);

    expect(container.querySelector('.footer')).not.toBeNull();
  });
});
