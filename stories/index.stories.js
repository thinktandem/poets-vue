/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from "@storybook/vue";

import "../assets/scss/app.scss";


storiesOf("Text", module)
  .add("H1", () => ({
    template: "<h1>H1  /  Roman  Italic  No  2  42</h1>"
  }))
  .add("H2", () => ({
    template: "<h2>h2  /  Roman  Italic  No  2  70</h2>"
  }))
  .add("H3", () => ({
    template: "<h3>h3  /  Roman  Italic  No  2  28</h3>"
  }))
  .add("Display", () => ({
    template: "<p>Display  Small  /  Regular  20</p>"
  }))
  .add("Body Text", () => ({
    template: `
      <div>
        <p class="lead">Heading  /  Semibold  16</p>
        <p class="big">SUBHEADING  /  SEMIBOLD  12</p>
        <p>Body  /  Regular  16</p>
        <figure>
          <figcaption>Caption  /  Regular  12</figcaption>
        </figure>
      </div>`
  }))
  }));

/* eslint-enable react/react-in-jsx-scope */
