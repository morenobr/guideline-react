import { useEffect } from "react";

type TAddLinkParams = {
  href: string,
  rel?: string,
  options?: { crossOrigin?: string}
}
type TUseScriptParams = {
  href: string,
  rel?: string,
  options?: { crossOrigin?: string},
  onsuccess?: () => void;
  onload?: (ev: Event) => void;
  onerror?: (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => void;
}

const existLink = (href: string) => !!document.querySelector('link[href="'+href+'"]');
const addLink = async({href, rel, options}: TAddLinkParams)=>{
  return new Promise((resolve,reject) =>{
    const script=document.createElement("link");
    script.href=href;
    if(rel){
      script.rel = rel;
    }
    if(options?.crossOrigin){
      script.crossOrigin = options.crossOrigin;
    }
    script.onload=(ev: Event) => {
      resolve(ev);
    }
    script.onerror=(event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
      reject({ event, source, lineno, colno, error });
    }
    document.head.appendChild(script);
  });
}

const promisesByHref = {};
const successByHref = {};

const useEffectResLinkLoader = ({href, rel, options, onsuccess, onload, onerror}: TUseScriptParams)=>{
  let crossOrigin = options?.crossOrigin;
  useEffect(()=>{
    if(existLink(href) && !promisesByHref[href]){
      return;
    }
    let ignoreResponse = false;
    if(successByHref[href]){
      if(onsuccess){
        onsuccess();
      }
      return;
    }
    if(!promisesByHref[href]){
      promisesByHref[href] = addLink({href: href, rel, options: {crossOrigin}});
    }
    promisesByHref[href]
      .then((ev: Event)=>{
        successByHref[href] = true;
        if(onsuccess){
          onsuccess();
        }
        if(ignoreResponse){
          return;
        }
        if(onload){
          onload(ev);
        }
      })
      .catch(({ event, source, lineno, colno, error }: {event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error})=>{
        if(ignoreResponse){
          return;
        }
        if(onerror){
          onerror(event, source, lineno, colno, error);
        }
      });
    return ()=>{
      ignoreResponse = true;
    };
  }, [href, rel, crossOrigin, onsuccess, onload, onerror])
};

export default useEffectResLinkLoader;