import React, { useState } from "react";
import { FloatingActionButton } from './index';

export default {
  title: "FloatingActionButton"
};
const ExitOnCLick = (props: any) => {
  const [exited, setExited] = useState(false);
  return (<FloatingActionButton {...props} exited={exited} onClick={()=>{
    setExited(true);
    setTimeout(()=>{
      setExited(false);
    }, 4000);
  }} />)
}

export const Basic = () => (
  <div>
    <h3>just icon</h3>
    <p>
      <FloatingActionButton icon="bookmark" />
    </p>
    <h3>With label</h3>
    <p>
      <FloatingActionButton icon="bookmark" label="With label" />
    </p>
    <h3>With label before</h3>
    <p>
      <FloatingActionButton icon="bookmark" label="With label" labelPosition="before" />
    </p>
    <h3>Mini</h3>
    <p>
      <FloatingActionButton mini icon="bookmark" />
    </p>
    <h3>Mini - With label</h3>
    <p>
      <FloatingActionButton mini icon="bookmark" label="La" />
    </p>
    <h3>Extended</h3>
    <p>
      <FloatingActionButton extended icon="bookmark" />
    </p>
    <h3>Extended - With label</h3>
    <p>
      <FloatingActionButton extended icon="bookmark" label="Long label" />
    </p>
    <h3>Exited</h3>
    <p>
      <ExitOnCLick icon="bookmark" />
    </p>
    <h3>Exited - With label</h3>
    <p>
      <ExitOnCLick icon="bookmark" label="Long label" />
    </p>
    <h3>Touch - Just icon</h3>
    <p>
      <FloatingActionButton touch icon="bookmark" /><FloatingActionButton touch icon="bookmark" />
    </p>
    <h3>Touch - With label</h3>
    <p>
      <FloatingActionButton touch icon="bookmark" label="With Label + touch" /><FloatingActionButton touch icon="bookmark" label="With Label + touch" />
    </p>
    <h3>Without Touch - Just icon</h3>
    <p>
      <FloatingActionButton icon="bookmark" /><FloatingActionButton icon="bookmark" />
    </p>
    <h3>Without Touch - With label</h3>
    <p>
      <FloatingActionButton icon="bookmark" label="With Label + touch" /><FloatingActionButton icon="bookmark" label="With Label + touch" />
    </p>
  </div>
);
