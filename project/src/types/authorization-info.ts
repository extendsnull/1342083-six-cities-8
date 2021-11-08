import {AuthorizationInfoKey, RawAuthorizationInfoKey} from '../const';
import type {Token} from './token';

type RawAuthorizationInfo  = {
  [RawAuthorizationInfoKey.AvatarUrl]: string;
  [RawAuthorizationInfoKey.Email]: string;
  [RawAuthorizationInfoKey.Id]: number;
  [RawAuthorizationInfoKey.IsPro]: boolean;
  [RawAuthorizationInfoKey.Name]: string;
  [RawAuthorizationInfoKey.Token]: Token;
};

type AuthorizationInfo = {
  [AuthorizationInfoKey.AvatarUrl]: string;
  [AuthorizationInfoKey.Email]: string;
  [AuthorizationInfoKey.Id]: number;
  [AuthorizationInfoKey.IsPro]: boolean;
  [AuthorizationInfoKey.Name]: string;
  [AuthorizationInfoKey.Token]: Token;
};

export type {
  RawAuthorizationInfo,
  AuthorizationInfo
};
