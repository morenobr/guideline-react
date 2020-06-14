import React from "react";
import { List, ListItem, ListDivider, ListGroup, ListGroupItem, IconButton } from './index';

export default {
  title: "List"
};
const svg = <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" strokeWidth="3" />
</svg>

export const SingleLine = () => (
  <div>
    <h3>Simple list</h3>
    <List>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>List with Divider</h3>
    <List>
      <ListItem text="Single-line item 1" />
      <ListDivider asItem />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>List (avatarList) with Divider inset</h3>
    <List avatarList>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListDivider asItem inset />
      <ListItem text="Single-line item 2" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 3" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <h3>List with Divider padded</h3>
    <List>
      <ListItem text="Single-line item 1" />
      <ListDivider asItem padded />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>Multiple lists with divider between</h3>
    <List>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <ListDivider />
    <List>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>Multiple lists (avatarList) with divider inset between</h3>
    <List avatarList>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 2" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 3" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <ListDivider inset />
    <List avatarList>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 2" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 3" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <h3>Multiple lists with divider padded between</h3>
    <List>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <ListDivider padded />
    <List>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>With icon button on left</h3>
    <List>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 2" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 3" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <h3>With icon button on right</h3>
    <List>
      <ListItem text="Single-line item 1" contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 2" contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 3" contentRight={<IconButton icon="favorite" />} />
    </List>
    <h3>With icon button on left and right</h3>
    <List>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 2" contentLeft={<IconButton icon="favorite" />} contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 3" contentLeft={<IconButton icon="favorite" />} contentRight={<IconButton icon="favorite" />} />
    </List>
    <h3>With icon material ui only on left</h3>
    <List>
      <ListItem text="Single-line item 1" contentLeft="favorite" />
      <ListItem text="Single-line item 2" contentLeft="favorite" />
      <ListItem text="Single-line item 3" contentLeft="favorite" />
    </List>
    <h3>With icon svg only on left</h3>
    <List>
      <ListItem text="Single-line item 1" contentLeft={svg} />
      <ListItem text="Single-line item 2" contentLeft={svg} />
      <ListItem text="Single-line item 3" contentLeft={svg} />
    </List>
    <h3>With icon material ui only on right</h3>
    <List>
      <ListItem text="Single-line item 1" contentRight="favorite" />
      <ListItem text="Single-line item 2" contentRight="favorite" />
      <ListItem text="Single-line item 3" contentRight="favorite" />
    </List>
    <h3>With icon svg only on right</h3>
    <List>
      <ListItem text="Single-line item 1" contentRight={svg} />
      <ListItem text="Single-line item 2" contentRight={svg} />
      <ListItem text="Single-line item 3" contentRight={svg} />
    </List>
  </div>
);


export const TwoLines = () => (
  <div>
    <h3>Simple list</h3>
    <List twoLine>
      <ListItem text="Two-lines item 1" secondaryText="Sub description" />
      <ListItem text="Two-lines item 2" secondaryText="Sub description" />
      <ListItem text="Two-lines item 3" secondaryText="Sub description" />
    </List>
    <h3>List with Divider</h3>
    <List twoLine>
      <ListItem text="Two-lines item 1" secondaryText="Sub description" />
      <ListDivider asItem />
      <ListItem text="Two-lines item 2" secondaryText="Sub description" />
      <ListItem text="Two-lines item 3" secondaryText="Sub description" />
    </List>
    <h3>Multiple lists with divider between</h3>
    <List twoLine>
      <ListItem text="Two-lines item 1" secondaryText="Sub description" />
      <ListItem text="Two-lines item 2" secondaryText="Sub description" />
      <ListItem text="Two-lines item 3" secondaryText="Sub description" />
    </List>
    <ListDivider />
    <List twoLine>
      <ListItem text="Two-lines item 1" secondaryText="Sub description" />
      <ListItem text="Two-lines item 2" secondaryText="Sub description" />
      <ListItem text="Two-lines item 3" secondaryText="Sub description" />
    </List>
    <h3>With icon button</h3>
    <List twoLine>
      <ListItem text="Two-lines item 1" secondaryText="Sub description" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 2" secondaryText="Sub description" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 3" secondaryText="Sub description" contentLeft={<IconButton icon="favorite" />} />
    </List>
  </div>
);

export const Selection = () => (
  <div>
    <h3>Selected by prop</h3>
    <List withSelection>
      <ListItem withSelection text="Single-line item 1" />
      <ListItem withSelection selected text="Single-line item 2 - Selected" />
      <ListItem withSelection text="Single-line item 3" />
    </List>
    <h3>Itens with disabled, selected and activated</h3>
    <List withSelection>
      <ListItem withSelection text="Single-line item 1" />
      <ListItem withSelection selected text="Single-line item 2 - Selected" />
      <ListItem withSelection text="Single-line item 3" />
      <ListItem withSelection disabled text="Single-line item 4 - Disabled" />
      <ListItem withSelection text="Single-line item 5" />
      <ListItem withSelection activated text="Single-line item 6 - Activated" />
      <ListItem withSelection text="Single-line item 7" />
    </List>
  </div>
);

export const ListGroups = () => (
  <div>
    <h3>Simple list</h3>
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
);


export const SingleLineDrawer = () => (
  <div>
    <h3>Simple list</h3>
    <List drawer>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>List with Divider</h3>
    <List drawer>
      <ListItem text="Single-line item 1" />
      <ListDivider drawer asItem />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>List (avatarList) with Divider inset</h3>
    <List drawer avatarList>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListDivider drawer asItem inset />
      <ListItem text="Single-line item 2" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 3" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <h3>List with Divider padded</h3>
    <List drawer>
      <ListItem text="Single-line item 1" />
      <ListDivider drawer asItem padded />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>Multiple lists with divider between</h3>
    <List drawer>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <ListDivider drawer />
    <List drawer>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>Multiple lists (avatarList) with divider inset between</h3>
    <List drawer avatarList>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 2" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 3" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <ListDivider drawer inset />
    <List drawer avatarList>
      <ListItem text="Single-line item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 2" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Single-line item 3" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <h3>Multiple lists with divider padded between</h3>
    <List drawer>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <ListDivider drawer padded />
    <List drawer>
      <ListItem text="Single-line item 1" />
      <ListItem text="Single-line item 2" />
      <ListItem text="Single-line item 3" />
    </List>
    <h3>With icon button on left</h3>
    <List drawer>
      <ListItem text="Two-lines item 1" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 2" contentLeft={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 3" contentLeft={<IconButton icon="favorite" />} />
    </List>
    <h3>With icon button on right</h3>
    <List drawer>
      <ListItem text="Two-lines item 1" contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 2" contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 3" contentRight={<IconButton icon="favorite" />} />
    </List>
    <h3>With icon button on left and right</h3>
    <List drawer>
      <ListItem text="Two-lines item 1" contentLeft={<IconButton icon="favorite" />} contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 2" contentLeft={<IconButton icon="favorite" />} contentRight={<IconButton icon="favorite" />} />
      <ListItem text="Two-lines item 3" contentLeft={<IconButton icon="favorite" />} contentRight={<IconButton icon="favorite" />} />
    </List>
    <h3>With icon material ui only on left</h3>
    <List drawer>
      <ListItem text="Two-lines item 1" contentLeft="favorite" />
      <ListItem text="Two-lines item 2" contentLeft="favorite" />
      <ListItem text="Two-lines item 3" contentLeft="favorite" />
    </List>
    <h3>With icon svg only on left</h3>
    <List drawer>
      <ListItem text="Two-lines item 1" contentLeft={svg} />
      <ListItem text="Two-lines item 2" contentLeft={svg} />
      <ListItem text="Two-lines item 3" contentLeft={svg} />
    </List>
    <h3>With icon material ui only on right</h3>
    <List drawer>
      <ListItem text="Two-lines item 1" contentRight="favorite" />
      <ListItem text="Two-lines item 2" contentRight="favorite" />
      <ListItem text="Two-lines item 3" contentRight="favorite" />
    </List>
    <h3>With icon svg only on right</h3>
    <List drawer>
      <ListItem text="Two-lines item 1" contentRight={svg} />
      <ListItem text="Two-lines item 2" contentRight={svg} />
      <ListItem text="Two-lines item 3" contentRight={svg} />
    </List>
  </div>
);
