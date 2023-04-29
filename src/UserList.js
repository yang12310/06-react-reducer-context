import React, {useContext} from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user}) {
  const {dispatch} = useContext(UserDispatch) //App.js 에서 받아온 규칙 / contextApi를 이용한 rducer 에 들어가는 규칙
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          dispatch({
            type: 'TOGGLE_USER',
            id: user.id})
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => {
        dispatch({
         type: 'REMOVE_USER', 
         id: user.id
        });
      }}>삭제</button>
    </div>
  );
});
function UserList({ users }) {
  return (
    <div className="userlist">
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
        />
      ))}
    </div>
  );
}
export default React.memo(UserList);
