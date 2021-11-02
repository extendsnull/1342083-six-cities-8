import {UserKey} from '../const';

type User = {
  [UserKey.AvatarUrl]: string;
  [UserKey.Id]: number;
  [UserKey.IsPro]: boolean;
  [UserKey.Name]: string;
}

export default User;
