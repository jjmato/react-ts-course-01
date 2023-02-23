import * as React from 'react';

import 'bulma/css/bulma.css';
import './style.css';

import ProfileCard from './ProfileCard';

import data from './pda.json';

export default function App() {
  return (
    <React.Fragment>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

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
