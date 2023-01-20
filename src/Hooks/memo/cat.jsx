import React, {memo} from 'react'

const Cat = memo(({name, meow = f => f}) => {
      console.log(`rendering ${name}`);
      return <p onClick={() => meow(name)}> {name} </p>; 
});
const PureCat = memo(  Cat,  (prevProps, nextProps) => prevProps.name === nextProps.name );

//const RenderCatOnce = memo(Cat, () => true); 
// const AlwaysRenderCat = memo(Cat, () => false);


export default PureCat;