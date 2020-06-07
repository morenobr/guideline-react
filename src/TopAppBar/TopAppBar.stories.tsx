import React from "react";
import TopAppBar from './TopAppBar';
import IconButton from '../IconButton';

export default {
  title: "TopAppBar"
};
const svg = <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" strokeWidth="3" />
</svg>

export const JustTitleAndNavigationIcon = () => (
  <div>
    <h3>Just Title and Navigation Icon</h3>
    <TopAppBar
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      />
  </div>
);

export const TitleAndNavigationWith_3Buttons = () => (
  <div>
    <h3>Title and Navigation with 3 buttons</h3>
    <TopAppBar
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Favorite" icon="favorite" />,
        <IconButton aria-label="Search" icon="search" />,
        <IconButton aria-label="Options" icon="more_vert" />
      ]}
      />
  </div>
);
export const UsingSvgIcons = () => (
  <div>
    <h3>Title and Navigation with 3 buttons</h3>
    <TopAppBar
      title="Page title"
      navigationIconButton={<IconButton icon={svg} />}
      iconButtonList={[
        <IconButton icon={svg} />
      ]}
      />
  </div>
);

export const ContextualActionBarSecondary = () => (
  <div>
    <h3>Contextual Action Bar (secondary)</h3>
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
  </div>
);

export const Short = () => (
  <div>
    <h3>Short Action Bar</h3>
    <TopAppBar
      short
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      />
  </div>
);

export const ShortCollapsed = () => (
  <div>
    <h3>ShortCollapsed Action Bar</h3>
    <TopAppBar
      short
      shortCollapsed
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      />
  </div>
);

export const ShortCollapsedWithAnActionItem = () => (
  <div>
    <h3>ShortCollapsed Action Bar with an Action Item</h3>
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
);

export const ShortCollapsedWith_2ActionItems = () => (
  <div>
    <h3>ShortCollapsed Action Bar with 2 Action Items</h3>
    <TopAppBar
      short
      shortCollapsed
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Share" icon="share" />,
        <IconButton aria-label="Delete" icon="delete" />,
      ]}
      />
  </div>
);

export const ShortCollapsedWith_3ActionItems = () => (
  <div>
    <h3>ShortCollapsed Action Bar with 3 Action Items</h3>
    <TopAppBar
      short
      shortCollapsed
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Share" icon="share" />,
        <IconButton aria-label="Delete" icon="delete" />,
        <IconButton aria-label="Open menu" icon="more_vert" />
      ]}
      />
  </div>
);

export const Fixed = () => (
  <div>
    <h3>Fixed Action Bar</h3>
    <TopAppBar
      fixed
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Favorite" icon="favorite" />,
        <IconButton aria-label="Search" icon="search" />,
        <IconButton aria-label="Options" icon="more_vert" />
      ]}
      />
    {[...new Array(45)].map((i, index)=>(
      <p key={index}>line {index}</p>
    ))}
  </div>
);

export const FixedScrolled = () => (
  <div>
    <h3>FixedScrolled Action Bar</h3>
    <TopAppBar
      fixed
      fixedScrolled
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Favorite" icon="favorite" />,
        <IconButton aria-label="Search" icon="search" />,
        <IconButton aria-label="Options" icon="more_vert" />
      ]}
      />
    {[...new Array(45)].map((i, index)=>(
      <p key={index}>line {index}</p>
    ))}
  </div>
);

export const Dense = () => (
  <div>
    <h3>Dense Action Bar</h3>
    <TopAppBar
      dense
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Favorite" icon="favorite" />,
        <IconButton aria-label="Search" icon="search" />,
        <IconButton aria-label="Options" icon="more_vert" />
      ]}
      />
  </div>
);

export const DenseFixed = () => (
  <div>
    <h3>Dense Fixed Action Bar</h3>
    <TopAppBar
      dense
      fixed
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Favorite" icon="favorite" />,
        <IconButton aria-label="Search" icon="search" />,
        <IconButton aria-label="Options" icon="more_vert" />
      ]}
      />
  </div>
);



export const ShortFixed = () => (
  <div>
    <h3>Short Fixed Action Bar</h3>
    <TopAppBar
      short
      fixed
      title="Page title"
      navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
      iconButtonList={[
        <IconButton aria-label="Favorite" icon="favorite" />,
        <IconButton aria-label="Search" icon="search" />,
        <IconButton aria-label="Options" icon="more_vert" />
      ]}
      />
  </div>
);
