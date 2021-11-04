import {RawUserKey, UserKey} from '../const';

type RawUser = {
  [RawUserKey.AvatarUrl]: string;
  [RawUserKey.Id]: number;
  [RawUserKey.IsPro]: boolean;
  [RawUserKey.Name]: string;
}

type User = {
  [UserKey.AvatarUrl]: string;
  [UserKey.Id]: number;
  [UserKey.IsPro]: boolean;
  [UserKey.Name]: string;
}

export type {
  RawUser,
  User
};
