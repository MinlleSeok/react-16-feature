import React from 'react';
import BoundaryHOC from './BoundaryHOC';
import { createPortal } from 'react-dom';

const Message = () => "Just touched it";

const Portals = () => {
  return createPortal(
    <Message />, document.getElementById("touchme")
  );
}

export default BoundaryHOC(Portals);