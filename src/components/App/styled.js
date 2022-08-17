import { css, Global } from 'pretty-lights';
import logo from '../../images/icon-kytLogo_large-252x252.svg';
import { contentWidth, padding } from '../../shared-styles/variables';

export const gb = Global`h1, h2, h3, h4, h5 {
  padding: 0;
  margin: 0;
}`;

export const navClass = css`
  width: ${contentWidth}px;
  padding: ${padding}px;
`;

export const headerClass = css`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem;
  background-color: white;
`;

export const profileContent = css`
  display: flex;
  align-items: center;
`;

export const profileImg = css`
  max-height: 2rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const navItemClass = css`
  display: inline-block;
`;

export const linkClass = css`
  padding: ${padding}px;
  color: #00a68f;
  font-size: 18px;
`;

export const logoClass = css`
  display: block;
  width: 252px;
  height: 252px;
  background: url(${logo});
`;
