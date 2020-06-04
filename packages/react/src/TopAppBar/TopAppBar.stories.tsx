import React, { useEffect } from "react";
import TopAppBar from './TopAppBar';
import IconButton from '../IconButton';

export default {
  title: "TopAppBar"
};
const useFullBody = ()=>{
  useEffect(()=>{
    const oldDisplay = document.body.style.display;
    const oldMargin = document.body.style.margin;
    document.body.style.display = 'flex';
    document.body.style.margin = '0 0 0 0';
    return ()=>{
      document.body.style.display = oldDisplay;
      document.body.style.margin = oldMargin;
    }
  },[])
}
const useStyleParagraphPadding = ()=>{
  useEffect(()=>{
    const style = document.createElement('style');
    style.innerHTML="#root { width: 100%; } p { padding: 8px }";
    document.head.appendChild(style);
    return ()=>{
      document.head.removeChild(style);
    }
  },[])
}
const useFullSpace = ()=>{
  useFullBody();
  useStyleParagraphPadding();
}
const svg = <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" strokeWidth="3" />
</svg>

export const JustTitleAndNavigationIcon = () => {
  useFullSpace();
  return (
    <div>
      <h3>Just Title and Navigation Icon</h3>
      <TopAppBar
        title="Page title"
        navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
        />
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const TitleAndNavigationWith_3Buttons = () => {
  useFullSpace();
  return (
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}
export const UsingSvgIcons = () => {
  useFullSpace();
  return (
    <div>
      <h3>Title and Navigation with 3 buttons</h3>
      <TopAppBar
        title="Page title"
        navigationIconButton={<IconButton icon={svg} />}
        iconButtonList={[
          <IconButton icon={svg} />
        ]}
        />
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const ContextualActionBarSecondary = () => {
  useFullSpace();
  return (
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const Short = () => {
  useFullSpace();
  return (
    <div>
      <h3>Short Action Bar</h3>
      <TopAppBar
        short
        title="Page title"
        navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
        />
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const ShortCollapsed = () => {
  useFullSpace();
  return (
    <div>
      <h3>ShortCollapsed Action Bar</h3>
      <TopAppBar
        short
        shortCollapsed
        title="Page title"
        navigationIconButton={<IconButton aria-label="Open navigation menu" icon="menu" />}
        />
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const ShortCollapsedWithAnActionItem = () => {
  useFullSpace();
  return (
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const ShortCollapsedWith_2ActionItems = () => {
  useFullSpace();
  return (
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const ShortCollapsedWith_3ActionItems = () => {
  useFullSpace();
  return (
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const ShortCollapsedWith_3ActionItemsAlightRight = () => {
  useFullSpace();
  return (
    <div dir="rtl">
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const ShortCollapsedWith_3ActionItemsFixedAlightRight = () => {
  useFullSpace();
  return (
    <div dir="rtl">
      <h3>ShortCollapsed Action Bar with 3 Action Items</h3>
      <TopAppBar
        fixed
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const Fixed = () => {
  useFullSpace();
  return (
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
}

export const FixedScrolled = () => {
  useFullSpace();
  return (
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
}

export const FixedTop = () => {
  useFullSpace();
  return (
    <div>
      <h3>FixedTop Action Bar</h3>
      <TopAppBar
        fixed
        fixedTop
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
}

export const Dense = () => {
  useFullSpace();
  return (
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}

export const DenseFixed = () => {
  useFullSpace();
  return (
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}



export const ShortFixed = () => {
  useFullSpace();
  return (
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
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
}
