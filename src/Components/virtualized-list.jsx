import React from 'react';
import { FixedSizeList } from 'react-window';


const Row = ({ index, style }) => (
   <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row {index}
   </div>
);

const Example = () => (
   <FixedSizeList
      className="List"
      height={250}
      itemCount={1000}
      itemSize={36}
      width={300}
   >
      {Row}
   </FixedSizeList>
);

export default Example;