import { useState } from "react";

function ToggleText(){
    const [ showText, setShowText] = useState(false);

    return(
        <div>
            <button onClick={()=>setShowText(!showText)}>show/hide</button>
            {showText && <h2>hello react</h2>}
        </div>
    )
}

export default ToggleText