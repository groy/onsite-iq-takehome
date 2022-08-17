import React from 'react';
import { Switch, Route } from 'react-router-dom';
import dynamic from 'kyt-runtime/dynamic';
import * as styles from './styled';
import GlobalStyle from './globalStyles';

export const Home = dynamic(() => import(/* webpackChunkName: "home" */ '../Home'));

function App() {
  return (
    <div>
      <GlobalStyle />
      <div className={styles.headerClass}>
        <div>HR Portal</div>
        <div className={styles.profileContent}>
          <img
            className={styles.profileImg}
            alt="Greg Royan profile"
            src="https://pbs.twimg.com/profile_images/1367794441658982400/GOTuKBLT_400x400.jpg"
          />
          Greg Royan
        </div>
      </div>
      <div className={styles.contentClass}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
