import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Twyla Tharp on Creativity</h1>
    <div>
      <p>
        US choreographer and author of &nbsp;
        <a href="https://www.amazon.co.uk/Creative-Habit-Learn-Use-Life/dp/0743235274">
          The Creative Habit
        </a>
      </p>
      <blockquote>
        <p>
          {`Creativity is more about taking the facts, fictions, and feelings we
            store away and finding new ways to connect them. What we're talking
            about here is metaphor. Metaphor is the lifeblood of all art, if it is
            not art itself. Metaphor is our vocabulary for connecting what we are
            experiencing now with what we have experienced before.`}
          <br />
          <strong>
            {`It's not only how we express what we remember, it's how we
              interpret it - for ourselves and others.`}
          </strong>
        </p>
      </blockquote>
    </div>
    <p>Posted September 2018</p>
  </Layout>
);
