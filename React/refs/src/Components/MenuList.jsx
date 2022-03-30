import React, { useImperativeHandle, useState, forwardRef } from "react";

const MenuBar = forwardRef((props, ref) => {
  const [visiblility, setVisibility] = useState(null);

  useImperativeHandle(ref, () => ({
    openList() {
      setVisibility(!visiblility);
    },
  }));
  props.setv(visiblility);
  return <></>;
});

export default MenuBar;
