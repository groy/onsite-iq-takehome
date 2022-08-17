import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateCard from '../CandidateCard';
import * as styles from './styled';

function Home() {
  const [allCandidates, setAllCandidates] = useState([]);

  function updateCD(candidate, updates) {
    const locCan = [...allCandidates];
    const idx = locCan.findIndex((el) => el.login.uuid === candidate);
    switch (updates.type) {
      case 'updateStatus':
        locCan[idx].status = updates.status;
        locCan[idx].comments = updates.comments;
        setAllCandidates(locCan);
        // Would send API request here to update user with new status via
        //   POST /api/candidates/:uuid
        localStorage.setItem('--Candis', JSON.stringify(locCan));
        break;
      case 'updateComment':
        locCan[idx].comments = updates.comments;
        setAllCandidates(locCan);
        // Would send API request here to update user with new status via
        //   POST /api/candidates/:uuid
        localStorage.setItem('--Candis', JSON.stringify(locCan));
        break;
      default:
        // If there were other actions to perform that required a callback
        console.log('Do nothing?');
    }
  }

  useEffect(() => {
    // Using localStorage to simulate storing users here.
    const sessionCandi =
      localStorage.getItem('--Candis') !== null ? JSON.parse(localStorage.getItem('--Candis')) : [];

    if (sessionCandi.length > 0) {
      // Setting candidates from persisted local storage
      setAllCandidates(sessionCandi);
    } else {
      // Pre-seeding UI with 50 candidates
      axios.get('https://randomuser.me/api/?results=50').then((res) => {
        localStorage.setItem('--Candis', JSON.stringify(res.data.results));
        setAllCandidates(res.data.results);
      });
    }
  }, [allCandidates.length]);

  const candidates = allCandidates.map((candi) => {
    return (
      <CandidateCard
        key={candi.login.uuid}
        first={candi.name.first}
        last={candi.name.last}
        email={candi.email}
        id={candi.login.uuid}
        status={candi.status}
        comments={candi.comments}
        thumbnail={candi.picture.large}
        // eslint-disable-next-line react/jsx-no-bind
        updateCandidate={updateCD}
      />
    );
  });
  return <section className={styles.section}>{candidates}</section>;
}

export default Home;
