import {useLayoutEffect, useState} from "react";


const _function = () =>{
    const [width, setSize] = useState(0);
  
    function windowSize() {
      useLayoutEffect(() => {
        function updateSize() {
          setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
      });
      return width;
    }

    
    return {windowSize}
}
export default _function

