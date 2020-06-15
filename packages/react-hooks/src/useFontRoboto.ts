import useEffectResLinkLoader from "./useEffectResLinkLoader";

const useFontRoboto = ()=>{
  useEffectResLinkLoader({
    href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap", 
    rel: 'stylesheet', 
  });
}

export default useFontRoboto;
