import React, { useState, useEffect, useCallback } from "react";
import { Drawer, List, ListItem, Button } from './index';

export default {
  title: "Drawer"
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

export const ModalDrawer = () => {
  useFullBody();
  const [open, setOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
      setOpen(false);
    })
  }, []);
  return (
    <>
      <Drawer animate modal open={open} onClose={()=>{setOpen(false)}}>
        <List asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </Drawer>
      <div>
        <h3>header content with Modal Drawer</h3>
        <p>
          content
        </p>
        <p>
          <Button raised label="Abrir gaveta" onClick={()=>setOpen(true)} />
        </p>
        {[...new Array(45)].map((i, index)=>(
          <p key={index}>line {index}</p>
        ))}
      </div>
    </>
  );
}

export const DismissibleAlwaysOpen = () => {
  useFullBody();
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
    })
  }, []);
  const content = (
    <div>
      <h3>header content with Modal Drawer</h3>
      <p>
        content
      </p>
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
  return (
    <>
      <Drawer animate dismissible open appContent={content}>
        <List asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </Drawer>
    </>
  );
}

export const FixedAlwaysOpen = () => {
  useFullBody();
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
    })
  }, []);
  const content = (
    <div>
      <h3>header content with Fixed Drawer</h3>
      <p>
        content
      </p>
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
  return (
    <>
      <Drawer fixed animate open appContent={content}>
        <List asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </Drawer>
    </>
  );
}
export const DismissibleAlwaysOpenListDrawer = () => {
  useFullBody();
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
    })
  }, []);
  const content = (
    <div>
      <h3>header content with Modal Drawer</h3>
      <p>
        content
      </p>
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
  return (
    <>
      <Drawer animate dismissible open appContent={content}>
        <List drawer asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </Drawer>
    </>
  );
}

export const DismissibleWithToogle = () => {
  const [open, setOpen] = useState(true);
  useFullBody();
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
    })
  }, []);
  const content = (
    <div>
      <h3>header content with Modal Drawer</h3>
      <p>
        content
      </p>
      <p>
        <Button raised label="Toogle gaveta" onClick={()=>setOpen(o => !o)} />
      </p>
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
  return (
    <>
      <Drawer animate dismissible open={open} appContent={content}>
        <List asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </Drawer>
    </>
  );
}


export const ModalDrawerWithHeader = () => {
  useFullBody();
  const [open, setOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
      setOpen(false);
    })
  }, []);
  return (
    <>
      <Drawer animate modal open={open} onClose={()=>{setOpen(false)}} title="Title" subtitle="Subtitle">
        <List asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </Drawer>
      <div>
        <h3>header content with Modal Drawer</h3>
        <p>
          content
        </p>
        <p>
          <Button raised label="Abrir gaveta" onClick={()=>setOpen(true)} />
        </p>
        {[...new Array(45)].map((i, index)=>(
          <p key={index}>line {index}</p>
        ))}
      </div>
    </>
  );
}

export const DismissibleAlwaysOpenWithHeader = () => {
  useFullBody();
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
    })
  }, []);
  const content = (
    <div>
      <h3>header content with Modal Drawer</h3>
      <p>
        content
      </p>
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
  return (
    <>
      <Drawer animate dismissible open appContent={content} title="Title" subtitle="Subtitle">
        <List asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </Drawer>
    </>
  );
}

export const DismissibleWithToogleWithHeader = () => {
  const [open, setOpen] = useState(true);
  useFullBody();
  const [menuSelected, setMenuSelected] = useState('home');
  const changePage = useCallback((page: string) => {
    return onClickPrevent(()=>{
      setMenuSelected(page);
    })
  }, []);
  const content = (
    <div>
      <h3>header content with Modal Drawer</h3>
      <p>
        content
      </p>
      <p>
        <Button raised label="Toogle gaveta" onClick={()=>setOpen(o => !o)} />
      </p>
      {[...new Array(45)].map((i, index)=>(
        <p key={index}>line {index}</p>
      ))}
    </div>
  );
  return (
    <>
      <Drawer animate dismissible open={open} appContent={content} title="Title" subtitle="Subtitle">
        <List asNavigation>
          <ListItem href="#" text="Home" contentLeft="house" activated={menuSelected === 'home'} onClick={changePage('home')} />
          <ListItem href="#" text="Inbox" contentLeft="inbox" activated={menuSelected === 'inbox'} onClick={changePage('inbox')} />
          <ListItem href="#" text="Outgoing" contentLeft="send" activated={menuSelected === 'outgoing'} onClick={changePage('outgoing')} />
          <ListItem href="#" text="Drafts" contentLeft="favorite" activated={menuSelected === 'drafts'} onClick={changePage('drafts')} />
        </List>
      </Drawer>
    </>
  );
}
