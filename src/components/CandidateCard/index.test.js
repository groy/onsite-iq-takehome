import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import CandidateCard from '.';

const sampleCandidate = {
  login: {
    uuid: 'PTSD-GHMF-4SGS-EGIG',
  },
  name: {
    first: 'Gregory',
    last: 'Royan',
  },
  email: 'groyan1@gmail.com',
  status: null,
  comments: [],
};

const updateFunction = jest.fn();

describe('Candidate Card Tests', () => {
  beforeEach(() => {
    updateFunction.mockClear();
  });

  it('Candidate card renders', () => {
    render(
      <CandidateCard
        first={sampleCandidate.name.first}
        last={sampleCandidate.name.last}
        email={sampleCandidate.email}
        id={sampleCandidate.login.uuid}
        status={sampleCandidate.status}
        comments={sampleCandidate.comments}
        updateCandidate={updateFunction}
      />
    );

    // Checking that the Candidate card was rendered, by seeing if the email exists on screen.
    expect(screen.getByText(sampleCandidate.email)).toBeTruthy();
    // Checking that the candidate card, with no status contains 2 buttons
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('Candidate card renders status APPROVED', () => {
    const status = 'approved';
    render(
      <CandidateCard
        first={sampleCandidate.name.first}
        last={sampleCandidate.name.last}
        email={sampleCandidate.email}
        id={sampleCandidate.login.uuid}
        status={status}
        comments={sampleCandidate.comments}
        updateCandidate={updateFunction}
      />
    );

    // Checking that the Candidate card was renders the APPROVED Status.
    expect(screen.getByText('APPROVED')).toBeTruthy();
    // Checking that there is only one button when status is passed in.
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  it('Candidate card renders status REJECTED', () => {
    const status = 'rejected';
    render(
      <CandidateCard
        first={sampleCandidate.name.first}
        last={sampleCandidate.name.last}
        email={sampleCandidate.email}
        id={sampleCandidate.login.uuid}
        status={status}
        comments={sampleCandidate.comments}
        updateCandidate={updateFunction}
      />
    );

    // Checking that the Candidate card was renders the REJECTED Status.
    expect(screen.getByText('REJECTED')).toBeTruthy();
    // Checking that there is only one button when status is passed in.
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  it('Candidate card approve button works as expected', async () => {
    render(
      <CandidateCard
        first={sampleCandidate.name.first}
        last={sampleCandidate.name.last}
        email={sampleCandidate.email}
        id={sampleCandidate.login.uuid}
        status={sampleCandidate.status}
        comments={sampleCandidate.comments}
        updateCandidate={updateFunction}
      />
    );
    await fireEvent.click(screen.getByText('Approve'));

    // Check that the update function has been called only one time.
    expect(updateFunction).toHaveBeenCalledTimes(1);
    // Check that the expected information has been passed to the update function
    expect(updateFunction).toHaveBeenCalledWith(sampleCandidate.login.uuid, {
      comments: [],
      status: 'approved',
      type: 'updateStatus',
    });
  });

  it('Candidate card rejected button works as expected and comments', async () => {
    const commentText = 'Comment text';
    render(
      <CandidateCard
        first={sampleCandidate.name.first}
        last={sampleCandidate.name.last}
        email={sampleCandidate.email}
        id={sampleCandidate.login.uuid}
        status={sampleCandidate.status}
        comments={sampleCandidate.comments}
        updateCandidate={updateFunction}
      />
    );
    const input = screen.getByPlaceholderText('Comments?');
    // Adding a comment to rejection
    await fireEvent.change(input, { target: { value: commentText } });
    await fireEvent.click(screen.getByText('Reject'));

    // Check that the update function has been called only one time.
    expect(updateFunction).toHaveBeenCalledTimes(1);
    // Check that the expected information has been passed to the update function
    //    Including the comments in the comments array.
    expect(updateFunction).toHaveBeenCalledWith(sampleCandidate.login.uuid, {
      comments: expect.arrayContaining([
        expect.objectContaining({
          comment: commentText,
        }),
      ]),
      status: 'rejected',
      type: 'updateStatus',
    });
  });

  it('Candidate card clear status button works as expected', async () => {
    const status = 'rejected';
    render(
      <CandidateCard
        first={sampleCandidate.name.first}
        last={sampleCandidate.name.last}
        email={sampleCandidate.email}
        id={sampleCandidate.login.uuid}
        status={status}
        comments={sampleCandidate.comments}
        updateCandidate={updateFunction}
      />
    );
    await fireEvent.click(screen.getByText('Clear Status'));

    // Check that the update function has been called only one time.
    expect(updateFunction).toHaveBeenCalledTimes(1);
    // Check that the expected information has been passed to the update function
    expect(updateFunction).toHaveBeenCalledWith(sampleCandidate.login.uuid, {
      comments: [],
      status: undefined,
      type: 'updateStatus',
    });
  });

  it('Candidate card renders comments', () => {
    const comments = [
      {
        user: { first: 'Greg', last: 'Royan', userId: 'hired' },
        time: '23-05-2022 13:45',
        comment: 'There is a comment here',
      },
      {
        user: { first: 'Greg', last: 'Royan', userId: 'hired' },
        time: '23-05-2022 15:45',
        comment: 'Here is a second comment',
      },
    ];

    render(
      <CandidateCard
        first={sampleCandidate.name.first}
        last={sampleCandidate.name.last}
        email={sampleCandidate.email}
        id={sampleCandidate.login.uuid}
        status={sampleCandidate.status}
        comments={comments}
        updateCandidate={updateFunction}
      />
    );

    // Checking that the Candidate card comments were rendered by counting the appearance of
    //  'Greg Royan' in rendered component (Should be 1 for each comment).
    expect(screen.getAllByText('Greg Royan')).toHaveLength(2);
  });
});
