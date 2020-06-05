import React from "react";
import Button from './Button';

export default {
  title: "Button"
};

export const Basic = () => (
  <div>
    <h3>Just button</h3>
    <p>
      <Button label="Just Button" />
    </p>
    <h3>outlined</h3>
    <p>
      <Button outlined label="Outlined" />
    </p>
    <h3>raised</h3>
    <p>
      <Button raised label="Raised" />
    </p>
    <h3>outlined + raised</h3>
    <p>
      <Button outlined raised label="Outlined + Raised" />
    </p>
    <h3>icon</h3>
    <p>
      <Button icon="bookmark" label="Icon with label" />
    </p>
    <h3>icon + outlined</h3>
    <p>
      <Button icon="bookmark" outlined label="Icon outlined" />
    </p>
    <h3>icon + raised</h3>
    <p>
      <Button icon="bookmark" raised label="Icon raised" />
    </p>
    <h3>outlined + raised + icon</h3>
    <p>
      <Button outlined raised icon="bookmark" label="Outlined + Raised + touch + icon" />
    </p>
    <h3>Touch - Just button</h3>
    <p>
      <Button touch label="Just Button + touch" />
    </p>
    <h3>Touch - outlined</h3>
    <p>
      <Button touch outlined label="Outlined + touch" />
    </p>
    <h3>Touch - raised</h3>
    <p>
      <Button touch raised label="Raised + touch" />
    </p>
    <h3>Touch - outlined + raised</h3>
    <p>
      <Button touch outlined raised label="Outlined + Raised + touch" />
    </p>
    <h3>Touch - icon</h3>
    <p>
      <Button touch icon="bookmark" label="Touch icon" />
    </p>
    <h3>Touch - outlined + raised + icon</h3>
    <p>
      <Button touch outlined raised icon="bookmark" label="Outlined + Raised + touch + icon" />
    </p>
  </div>
);