import {AuthInfoKey, RawAuthInfoKey} from '../const';
import type {Token} from './token';

type RawAuthInfo = {
  [RawAuthInfoKey.AvatarUrl]: string;
  [RawAuthInfoKey.Email]: string;
  [RawAuthInfoKey.Id]: number;
  [RawAuthInfoKey.IsPro]: boolean;
  [RawAuthInfoKey.Name]: string;
  [RawAuthInfoKey.Token]: Token;
};

type AuthInfo = {
  [AuthInfoKey.AvatarUrl]: string;
  [AuthInfoKey.Email]: string;
  [AuthInfoKey.Id]: number;
  [AuthInfoKey.IsPro]: boolean;
  [AuthInfoKey.Name]: string;
  [AuthInfoKey.Token]: Token;
};

export type {
  RawAuthInfo,
  AuthInfo
};
