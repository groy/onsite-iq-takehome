/* eslint-disable import/prefer-default-export */
import { css } from 'pretty-lights';

export const candidateCard = css`
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const img = css`
  border-radius: 50%;
  overflow: hidden;
  margin: 1rem;
`;

export const cdnResp = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const btnContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const deleteBtn = css`
  color: grey;

  &:hover {
    cursor: pointer;
  }
`;

export const comment = css`
  width: 100%;
  margin-top: 1rem;
`;

export const date = css`
  font-size: 12px;
  color: grey;
  margin: 0.3rem 0;
`;

export const paragraph = css`
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const approved = css`
  color: green;
`;

export const rejected = css`
  color: #f14e4e;
`;

export const btn = css`
  background-color: #4eb5f1;
  border-radius: 0.5rem;
  border: none;
  text-decoration: none;
  color: white;
  text-align: center;
  font-weight: 300;
  box-sizing: border-box;
  padding: 0.3rem 0.9rem;

  &:hover {
    cursor: pointer;
    background-color: #4095c6;
  }
`;

export const rejectBtn = css`
  background-color: #f14e4e;
  border-radius: 0.5rem;
  border: none;
  text-decoration: none;
  color: white;
  text-align: center;
  font-weight: 300;
  box-sizing: border-box;
  padding: 0.3rem 0.9rem;

  &:hover {
    cursor: pointer;
    background-color: #930b0b;
  }
`;
