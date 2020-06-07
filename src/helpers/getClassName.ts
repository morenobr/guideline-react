const getClassName = (classes: any | Array<string>)=>{
  if(Array.isArray(classes)){
    return classes.filter(k => !!k).join(' ')
  }
  return Object.keys(classes).filter(k => !!classes[k]).join(' ');
}

export default getClassName;
