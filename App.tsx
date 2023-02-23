import * as React from 'react';
import './style.css';

import ProfileCard from './ProfileCard';

import data from './pda.json';

export default function App() {
  return (
    <React.Fragment>
      <h1>Personal Digital Assistants</h1>
      {data.map((item, index) => {
        return (
          <ProfileCard
            key={React.useId()}
            title={item.name}
            handle={item.handle}
          ></ProfileCard>
        );
      })}
    </React.Fragment>
  );
}
