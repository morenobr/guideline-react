import React from "react";
import IconButtonToogle from './IconButtonToogle';

export default {
  title: "IconButtonToogle"
};
const svgActive = <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke-width="3" />
</svg>;
const svgInactive = <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke-width="3"  stroke="currentColor" fill="none" />
</svg>;

export const Basic = () => (
  <div>
    <h3>just icon</h3>
    <p>
      <IconButtonToogle iconOn="favorite" iconOff="favorite_border" />
    </p>
    <h3>With label</h3>
    <p>
      <IconButtonToogle iconOn="favorite" iconOff="favorite_border" ariaLabelOn="Add Favorite" ariaLabelOff="Remove Favorite" />
    </p>
    <h3>just SVG icon</h3>
    <p>
      <IconButtonToogle iconOn={svgActive} iconOff={svgInactive} />
    </p>
    <h3>just icon - primary</h3>
    <p>
      <IconButtonToogle primary iconOn="favorite" iconOff="favorite_border" />
    </p>
    <h3>just icon - secondary</h3>
    <p>
      <IconButtonToogle secondary iconOn="favorite" iconOff="favorite_border" />
    </p>
  </div>
);
