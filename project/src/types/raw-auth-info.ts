import {RawAuthInfoKey} from '../const';
import type Token from './token';

type RawAuthInfo = {
  [RawAuthInfoKey.AvatarUrl]: string;
  [RawAuthInfoKey.Email]: string;
  [RawAuthInfoKey.Id]: number;
  [RawAuthInfoKey.IsPro]: boolean;
  [RawAuthInfoKey.Name]: string;
  [RawAuthInfoKey.Token]: Token;
};

export default RawAuthInfo;
