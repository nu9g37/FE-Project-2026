'use client'

import React, { SyntheticEvent } from "react";

export default function InteractiveCard ( { children } : { children:React.ReactNode } ) {

  function onCardMouseAction ( event:SyntheticEvent ) {
    if (event.type == 'mouseover') {
      event.currentTarget.classList.remove('shadow-md', 'bg-white');
      event.currentTarget.classList.add('shadow-lg', 'bg-neutral-200');
    } else {
      event.currentTarget.classList.remove('shadow-lg', 'bg-neutral-200');
      event.currentTarget.classList.add('shadow-md', 'bg-white');
    }
  }

  return (
    <div className="w-full h-[300px] rounded-lg shadow-md bg-white m-5 shadow-black" 
      onMouseOver={ (e) => onCardMouseAction(e) }
      onMouseOut={ (e) => onCardMouseAction(e) }
    >
      {children}
    </div>
  );
}