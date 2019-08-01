import React from 'react';
import {Frame, Color} from 'framer';
import {motion} from 'framer-motion';

const Framing = (props) => {
  const random = Color.random();
  // return (<Framing.div

  //   animate={{ scale: 2 }}
  //   transition={{ duration: 0.5 }}
  // />);
  return (
    <Frame
    zindex = {'-1'}
    background = {random}
    width = {'100%'}
    >
    {props.children}
      {/* <motion.div
      whileHover = 'hover'></motion.div> */}
    </Frame>
  )
}
 
export default Framing; 