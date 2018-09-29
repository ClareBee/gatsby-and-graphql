import React from "react";
import { css } from "react-emotion";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <div
    className={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/">
        <h3
          className={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            color: teal;
            font-style: normal;
          `}
        >
          MySweetSite
        </h3>
      </Link>
      <ul
        className={css`
          float: right;
        `}
      >
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
);
