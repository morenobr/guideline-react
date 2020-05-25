import useEffectResLinkLoader from "./useEffectResLinkLoader";

const useFontMaterialIcons = ()=>{
  useEffectResLinkLoader({
    href: "https://fonts.googleapis.com/icon?family=Material+Icons", 
    rel: 'stylesheet', 
  });
}

export default useFontMaterialIcons;