# Moreno Guideline - React with CSS class names without CSS

Moreno Guideline React Library has only structure with React and CSS Class names with prefix `mg-`.

Library created to use in personal projects of Petherson moreno. If you want to use it in more details and need help, please contact Petherson Moreno.

## Installation

```sh
npm install @morenobr/guideline-react
```

## Components

All components need a external CSS. A example of this CSS can be found in package `@morenobr/guideline-style`.

### Component Button

```jsx
import React from "react";
import { Button } from '@morenobr/guideline-react';

export default ()=>(
  <div class="content">
    <Button label="With Label" />
    <Button outlined label="Outlined" />
    <Button raised label="Raised" />
    <Button outlined raised label="Outlined + Raised" />
    <Button icon="bookmark" label="Icon with label" />
    <Button icon="bookmark" outlined label="Icon outlined" />
    <Button icon="bookmark" raised label="Icon raised" />
    <Button outlined raised icon="bookmark" label="Outlined + Raised + icon" />
    <Button touch outlined raised icon="bookmark" label="Outlined + Raised + touch + icon" />
  </div>
)
```

### Component Drawer

Modal Drawer:

```jsx
import React, { useState } from "react";
import { Drawer } from '@morenobr/guideline-react';

export default ()=>{
  const [open,setOpen] = useState(false);
  return (
    <div class="content">
      <Drawer modal open={open} onClose={()=>{setOpen(false)}}>Modal Drawer</Drawer>
      <button onClick={()=>setOpen(o => !o)}>Toogle Drawer</button>
    </div>
  );
}
```

Dismissible Always Open:

```jsx
import React from "react";
import { Drawer } from '@morenobr/guideline-react';

const appContent = (<div className="app-content-with-drawer"></div>);

export default ()=>{
  return (
    <div class="content">
      <Drawer dismissible open appContent={appContent}>Dismissible Always Open</Drawer>
    </div>
  );
}
```

Fixed Always Open:

```jsx
import React from "react";
import { Drawer } from '@morenobr/guideline-react';

const appContent = (<div className="app-content-with-drawer"></div>);

export default ()=>{
  return (
    <div class="content">
      <Drawer dismissible open appContent={appContent}>Fixed Always Open</Drawer>
    </div>
  );
}
```

Using animate prop add transition to changes.

Modal Drawer Animated:

```jsx
import React, { useState } from "react";
import { Drawer } from '@morenobr/guideline-react';

export default ()=>{
  const [open,setOpen] = useState(false);
  return (
    <div class="content">
      <Drawer animate modal open={open} onClose={()=>{setOpen(false)}}>Modal Drawer</Drawer>
      <button onClick={()=>setOpen(o => !o)}>Toogle Drawer</button>
    </div>
  );
}
```

### Component DrawerResponsive

It changes component Drawer between Dismissible/Fixed and Modal, the default is Dismissible and Modal, if prop fixed is true is changed to Fixed and Modal. It uses prop minWidthDesktop to define the changes.

```jsx
import React, { useState } from "react";
import { DrawerResponsive } from '@morenobr/guideline-react';

const AppContent = ({setOpen, drawerAlwaysVisible, ...otherProps }:any)=>(
  <div className="app-content-with-drawer" {...otherProps}>{drawerAlwaysVisible?'drawer visible':''}<br /><button onClick={()=>setOpen(o => !o)}>Toogle Drawer</button></div>
);


export default ()=>{
  const [open,setOpen] = useState(false);
  const appContent = (<AppContent setOpen={setOpen} />);
  return (
    <div class="content">
      <DrawerResponsive animate minWidthDesktop={600} open={open} onClose={()=>{setOpen(false)}} appContent={appContent}>Responsive Drawer</Drawer>
      
    </div>
  );
}
```

### Component FloatingActionButton

```jsx
import React from "react";
import { FloatingActionButton } from '@morenobr/guideline-react';

const ExitOnCLick = (props: any) => {
  const [exited, setExited] = useState(false);
  return (<FloatingActionButton {...props} exited={exited} onClick={()=>{
    setExited(true);
    setTimeout(()=>{
      setExited(false);
    }, 4000);
  }} />)
}

export default ()=>(
  <div class="content">
    <FloatingActionButton icon="bookmark" />
    <FloatingActionButton icon="bookmark" label="With label" />
    <FloatingActionButton icon="bookmark" label="With label" labelPosition="before" />
    <FloatingActionButton mini icon="bookmark" />
    <FloatingActionButton mini icon="bookmark" label="La" />
    <FloatingActionButton extended icon="bookmark" />
    <FloatingActionButton extended icon="bookmark" label="Long label" />
    <ExitOnCLick icon="bookmark" />
    <ExitOnCLick icon="bookmark" label="Long label" />
    <FloatingActionButton touch icon="bookmark" /><FloatingActionButton touch icon="bookmark" />
    <FloatingActionButton touch icon="bookmark" label="With Label + touch" /><FloatingActionButton touch icon="bookmark" label="With Label + touch" />
    <FloatingActionButton icon="bookmark" /><FloatingActionButton icon="bookmark" />
    <FloatingActionButton icon="bookmark" label="With Label + touch" /><FloatingActionButton icon="bookmark" label="With Label + touch" />
  </div>
)
```

### Component IconButton

```jsx
import React from "react";
import { IconButton } from '@morenobr/guideline-react';

const svg = <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" strokeWidth="3" />
</svg>

export default ()=>(
  <div class="content">
    <IconButton icon="favorite" />
    <IconButton icon="favorite" ariaLabel="With label" />
    <IconButton icon={svg} />
    <IconButton primary icon="favorite" />
    <IconButton secondary icon="favorite" />
  </div>
)
```

### Component IconButtonToogle

```jsx
import React from "react";
import { IconButtonToogle } from '@morenobr/guideline-react';

const svgActive = <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" strokeWidth="3" />
</svg>;
const svgInactive = <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" strokeWidth="3"  stroke="currentColor" fill="none" />
</svg>;

export default ()=>(
  <div class="content">
    <IconButtonToogle iconOn="favorite" iconOff="favorite_border" />
    <IconButtonToogle iconOn="favorite" iconOff="favorite_border" ariaLabelOn="Add Favorite" ariaLabelOff="Remove Favorite" />
    <IconButtonToogle iconOn={svgActive} iconOff={svgInactive} />
    <IconButtonToogle primary iconOn="favorite" iconOff="favorite_border" />
    <IconButtonToogle secondary iconOn="favorite" iconOff="favorite_border" />
  </div>
)
```

### Component List (and derived: ListItem, ListDivider, ListGroup, ListGroupItem)

```jsx
import React from "react";
import { List, ListItem, ListDivider, ListGroup, ListGroupItem, IconButton } from '@morenobr/guideline-react';

export default ()=>(
  <div class="content">
    <List>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
    </List>
    <List>
      <ListItem text="Single-line item 1" />
      <ListDivider asItem />
      <ListItem text="Single-line item 2" />
    </List>
    <List avatarList>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListDivider asItem inset />
      <ListItem text="Single-line item 2" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <List>
      <ListItem text="Single-line item 1" />
      <ListDivider asItem padded />
      <ListItem text="Single-line item 2" />
    </List>
    <List>
      <ListItem text="Single-line item 1" />
    </List>
    <ListDivider />
    <List>
      <ListItem text="Single-line item 1" />
    </List>
    <List avatarList>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <ListDivider inset />
    <List avatarList>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <List>
      <ListItem text="Two-lines item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 2" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <List>
      <ListItem text="Two-lines item 1" contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 2" contentRight={<IconButton icon="favorite" />} />
    </List>
    <List>
      <ListItem text="Two-lines item 1" contentLeft={<IconButton icon="favorite" />} contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 2" contentLeft={<IconButton icon="favorite" />} contentRight={<IconButton icon="favorite" />} />
    </List>
    <List twoLine>
      <ListItem text="Two-lines item 1" secondaryText="Sub description" />
      <ListItem text="Two-lines item 2" secondaryText="Sub description" />
    </List>
    <List withSelection>
      <ListItem withSelection text="Single-line item 1" />
      <ListItem withSelection selected text="Single-line item 2 - Selected" />
      <ListItem withSelection text="Single-line item 3" />
      <ListItem withSelection disabled text="Single-line item 4 - Disabled" />
      <ListItem withSelection text="Single-line item 5" />
      <ListItem withSelection activated text="Single-line item 6 - Activated" />
      <ListItem withSelection text="Single-line item 7" />
    </List>
    <ListGroup>
      <ListGroupItem header="List 1">
        <List withSelection>
          <ListItem text="List1 - item 1" />
          <ListItem text="List1 - item 2" />
          <ListItem text="List1 - item 3" />
        </List>
      </ListGroupItem>
      <ListGroupItem header="List 2">
        <List withSelection>
          <ListItem text="List2 - item 1" />
          <ListItem text="List2 - item 2" />
          <ListItem text="List2 - item 3" />
        </List>
      </ListGroupItem>
    </ListGroup>
  </div>
)
```

List and ListGroup has a prop that can be used to be a variant use with Drawer component.

### Component TopAppBar


```jsx
import React from "react";
import { TopAppBar } from '@morenobr/guideline-react';

export default ()=>(
  <div class="content">
    <TopAppBar
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      />
    <TopAppBar
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Favorite" icon="favorite" />,
        <IconButton aria-label="Search" icon="search" />,
        <IconButton aria-label="Options" icon="more_vert" />
      ]}
      />
    <TopAppBar
      secondary
      title="Contextual title"
      navigationIconButton={<IconButton aria-label="Close" icon="close" />}
      iconButtonList={[
        <IconButton aria-label="Share" icon="share" />,
        <IconButton aria-label="Delete" icon="delete" />,
        <IconButton aria-label="Open menu" icon="more_vert" />
      ]}
      />
    <TopAppBar
      short
      shortCollapsed
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      />
    <TopAppBar
      short
      shortCollapsed
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Share" icon="share" />,
      ]}
      />
  </div>
)
```