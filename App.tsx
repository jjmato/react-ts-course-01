import * as React from 'react';

import 'bulma/css/bulma.css';
import './style.css';

import ProfileCard from './ProfileCard';

import data from './pda.json';

export default function App() {
  return (
    <React.Fragment>
      <h1>Personal Digital Assistants</h1>

      <div className="container">
        <div className="section">
          <div className="columns">
            {data.map((item, index) => {
              return (
                <div className="column is-3">
                  <ProfileCard
                    key={React.useId()}
                    title={item.name}
                    handle={item.handle}
                    imageSrc={item.img}
                  ></ProfileCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
