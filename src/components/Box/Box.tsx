import * as React from 'react';

interface BoxProps {
  styles: React.CSSProperties; 
}

// CSS Styles
const componentStyles = {
  height: '400px',
  width: '400px',
  backgroundColor: 'red'
}

export default (props: BoxProps) => (
  <div style={{...componentStyles, ...props.styles}}>
    <h1>Box Content</h1>
  </div>
);