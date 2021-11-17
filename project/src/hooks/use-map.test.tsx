import {renderHook} from '@testing-library/react-hooks';
import {Map} from 'leaflet';
import {MutableRefObject} from 'react';
import {makeMockMapLocation} from '../utils/mocks';
import userMap from './use-map';

const div = document.createElement('div');
const city = makeMockMapLocation();

describe('Hook: useMap', () => {
  it('shoul render correctly', () => {
    const ref: MutableRefObject<HTMLElement> = {
      current: div,
    };

    const {result} = renderHook(() => userMap(ref, city));
    const map = result.current;
    expect(map).toBeInstanceOf(Map);
  });
});
