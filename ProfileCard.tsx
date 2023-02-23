import * as React from 'react';

function ProfileCard({ title, handle }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{handle}</p>
    </div>
  );
}

export default ProfileCard;
