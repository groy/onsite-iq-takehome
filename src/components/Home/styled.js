import { css } from 'pretty-lights';

// eslint-disable-next-line import/prefer-default-export
export const section = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 690px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.3rem;
  }
`;
