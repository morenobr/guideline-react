import React, { useState, useEffect, useCallback } from "react";
import DrawerResponsive from './DrawerResponsive';
import { List, ListItem } from '../List';
import Button from '../Button';
import TopAppBar from '../TopAppBar';
import IconButton from '../IconButton';

export default {
  title: "DrawerResponsive"
};
const useFullBody = ()=>{
  useEffect(()=>{
    const oldDisplay = document.body.style.display;
    const oldMargin = document.body.style.margin;
    document.body.style.display = 'flex';
    document.body.style.margin = '0 0 0 8px';
    return ()=>{
      document.body.style.display = oldDisplay;
      document.body.style.margin = oldMargin;
    }
  },[])
}
const onClickPrevent: (callback?: ()=>void) => React.MouseEventHandler<HTMLAnchorElement> = 
callback => e => {
  e.preventDefault();
  if(callback){
    callback();
  }
};
const AppContent = ({setOpen, drawerAlwaysVisible, ...otherProps }:any)=>(
  <div {...otherProps}>
    <TopAppBar
      fixed
      fixedScrolled
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
    </div>
  </div>
);

export const ResponsiveDrawer = () => {
  useFullBody();
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
      <DrawerResponsive minWidthDesktop={400} animate open={open} onClose={()=>{setOpen(false)}} appContent={content}>
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
