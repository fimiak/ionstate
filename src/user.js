import request from './request';

export default function getUserName(userID) {
  return request(`/users/${userID}`).then(user => user.name);
}
