import {AuthInfoKey} from '../const';
import type Token from './token';

type AuthInfo = {
  [AuthInfoKey.AvatarUrl]: string;
  [AuthInfoKey.Email]: string;
  [AuthInfoKey.Id]: number;
  [AuthInfoKey.IsPro]: boolean;
  [AuthInfoKey.Name]: string;
  [AuthInfoKey.Token]: Token;
};

export default AuthInfo;
