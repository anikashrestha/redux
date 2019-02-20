import React from 'react'
///function that returns new object that listens the actions

export const add = () =>({
    type:'ADD'   /// also includes "data:"
});
export const subtract = () =>({
    type:'SUBTRACT'
});
export default function Actions() {
  return (
    <div>
      
    </div>
  )
}
