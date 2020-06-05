import { useEffect } from "react";

type TAddScriptParams = {
  src: string,
  options?: { crossOrigin?: string}
}
type TUseScriptParams = {
  src: string,
  options?: { crossOrigin?: string},
  onsuccess?: () => void;
  onload?: (ev: Event) => void;
  onerror?: (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => void;
}

const existScript = (src: string) => !!document.querySelector('script[src="'+src+'"]');
const addScript = async({src, options}: TAddScriptParams)=>{
  return new Promise((resolve,reject) =>{
    const script=document.createElement("script");
    script.src=src;
    if(options?.crossOrigin){
      script.crossOrigin = options.crossOrigin;
    }
    script.onload=(ev: Event) => {
      resolve(ev);
    }
    script.onerror=(event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
      reject({ event, source, lineno, colno, error });
    }
    document.body.appendChild(script);
  });
}

const promisesBySrc = {};
const successBySrc = {};

const useEffectResScriptLoader = ({src, options, onsuccess, onload, onerror}: TUseScriptParams)=>{
  const crossOrigin = options?.crossOrigin;
  useEffect(()=>{
    if(existScript(src) && !promisesBySrc[src]){
      return;
    }
    let ignoreResponse = false;
    if(successBySrc[src]){
      if(onsuccess){
        onsuccess();
      }
      return;
    }
    if(!promisesBySrc[src]){
      promisesBySrc[src] = addScript({src: src, options: {crossOrigin}});
    }
    promisesBySrc[src]
      .then((ev: Event)=>{
        successBySrc[src] = true;
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
  }, [src, crossOrigin, onsuccess, onload, onerror])
};

export default useEffectResScriptLoader;