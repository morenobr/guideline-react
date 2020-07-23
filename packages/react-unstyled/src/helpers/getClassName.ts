const getClassName = (classes: any | Array<string>, additionalClassName?: string)=>{
  let classNames;
  if(Array.isArray(classes)){
    classNames = classes;
  } else {
    classNames = Object.keys(classes).filter(k => !!classes[k]);
  }
  classNames.push(additionalClassName);
  return classNames.filter(k => !!k).join(' ');
}

export default getClassName;
