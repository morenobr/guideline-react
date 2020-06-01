import React from "react";
import IconButton from './IconButton';

export default {
  title: "IconButton"
};
const svg = <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" strokeWidth="3" />
</svg>

export const Basic = () => (
  <div>
    <h3>just icon</h3>
    <p>
      <IconButton icon="favorite" />
    </p>
    <h3>With label</h3>
    <p style={{color: 'blue'}}>
      <IconButton icon="favorite" ariaLabel="With label" />
    </p>
    <h3>just SVG icon (forced red)</h3>
    <p style={{color: 'red'}}>
      <IconButton icon={svg} />
    </p>
    <h3>just icon - primary</h3>
    <p>
      <IconButton primary icon="favorite" />
    </p>
    <h3>just icon - secondary</h3>
    <p>
      <IconButton secondary icon="favorite" />
    </p>
  </div>
);
