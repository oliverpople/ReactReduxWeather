import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
    <Sparklines svgHeight={200} svgWidth={260} data={props.data}>
      <SparklinesLine color={props.color} />
    </Sparklines>
    </div>
  );
}
