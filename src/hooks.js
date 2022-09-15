import { useState } from "react";

export function useInputVal(val){
    const [value , setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
    return {
        value,
        onChange: handleChange
    }
}