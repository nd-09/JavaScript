import React, { useRef, useState } from "react";
import MenuList from "./MenuList";
function Parent() {
  const listRef = useRef();
  const [vis, setVis] = useState(null);
  const set = (e) => {
    setVis(e);
  };
  console.log(vis);
  return (
    <div>
      <button onClick={() => listRef.current.openList()}>Open List</button>
      <MenuList ref={listRef} setv={set} />
      {vis === true ? (
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
export default Parent;
