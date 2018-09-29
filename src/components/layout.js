import React from "react";
import { css } from "react-emotion";
import { rhythm } from "../utils/typography";
import { StaticQuery, Link, graphql } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

// StaticQuery new API in Gatsby v2 allowing non-page components to run GraphQL queries
export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
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
              {data.site.siteMetadata.title}
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
            <ListLink to="/my-files/">List of Files</ListLink>
            <ListLink to="/blogposts/">Blog Posts</ListLink>
          </ul>
        </header>
        {children}
      </div>
    )}
  />
);
