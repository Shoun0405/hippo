import {useState} from 'react'

function useInputs(initialValue,name) {
    const [value, setValue] = useState(initialValue)

        
    
    const bind = {
        value,
        onChange: e => setValue(e.target.value),
        name
    }

    const reset = () => {
        setValue(initialValue)
    }

        return [bind,reset]
}

export default useInputs