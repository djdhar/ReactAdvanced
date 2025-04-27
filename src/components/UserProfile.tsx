// src/components/UserProfile.tsx

import React from 'react';

// Simple UserProfile component
type UserProfileProps = {
  name: string;
  age: number;
};

const UserProfile: React.FC<UserProfileProps> = ({ name, age }) => {
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserProfile;
