import React from "react";
function UserCard({ head, content }) {
  return (
    <>
      <div className="card-head">{head}</div>
      <div className="card-content">{content}</div>
    </>
  );
}

export default UserCard;
