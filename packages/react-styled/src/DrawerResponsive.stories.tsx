import React, { useState, useEffect, useCallback } from "react";
import { DrawerResponsive, List, ListItem, Button, TopAppBar, IconButton } from './index';

export default {
  title: "DrawerResponsive"
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
const useStyleItemsPadding = ()=>{
  useEffect(()=>{
    const style = document.createElement('style');
    style.innerHTML="#root { width: 100%; } p, h3 { padding: 8px }";
    document.head.appendChild(style);
    return ()=>{
      document.head.removeChild(style);
    }
  },[])
}
const useFullSpace = ()=>{
  useFullBody();
  useStyleItemsPadding();
}
const onClickPrevent: (callback?: ()=>void) => React.MouseEventHandler<HTMLAnchorElement> = 
callback => e => {
  e.preventDefault();
  if(callback){
    callback();
  }
};
const AppContent = ({setOpen, drawerAlwaysVisible, ...otherProps }:any)=>(
  <div {...otherProps} style={{overflow:'scrool'}}>
    <TopAppBar
      title="Page title"
      navigationIconButton={drawerAlwaysVisible?undefined:<IconButton aria-label="Open navigation menu" icon="menu" onClick={()=>setOpen((o:boolean) => !o)} />}
      iconButtonList={[
        <IconButton aria-label="Favorite" icon="favorite" />,
        <IconButton aria-label="Search" icon="search" />,
        <IconButton aria-label="Options" icon="more_vert" />
      ]}
      />
    <div>
      <h3>header content with Modal DrawerResponsive</h3>
      <p>
        content
      </p>
      <p>
        <Button raised label="Toogle gaveta" onClick={()=>setOpen((o:boolean) => !o)} />
      </p>
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  </div>
);

export const ResponsiveDrawer = () => {
  useFullSpace();
  const [open, setOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
      setOpen(false);
    })
  }, []);

  const content = <AppContent setOpen={setOpen} />
  return (
    <>
      <DrawerResponsive minWidthDesktop={600} animate open={open} onClose={()=>{setOpen(false)}} appContent={content}>
        <List asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </DrawerResponsive>
    </>
  );
}


export const ResponsiveDrawerFixed = () => {
  useFullSpace();
  const [open, setOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
      setOpen(false);
    })
  }, []);

  const content = <AppContent setOpen={setOpen} />
  return (
    <>
      <DrawerResponsive fixed minWidthDesktop={600} animate open={open} onClose={()=>{setOpen(false)}} appContent={content}>
        <List asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </DrawerResponsive>
    </>
  );
}
