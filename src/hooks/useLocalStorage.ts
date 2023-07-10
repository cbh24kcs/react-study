import { useState, Dispatch, SetStateAction, useEffect } from "react";

function valueToString(value: any): string {
    if (value && typeof value === 'object') {
        return JSON.stringify(value)
    } else {
        return `${value || ''}`
    }
}

function parse(value: string) {
    try {
        return JSON.parse(value)
    } catch {
        return value
    }
}


export const useLocalStorage = <T>(key: string, initData: T): [T, Dispatch<SetStateAction<T>>] => {

    function getDefault(key: string) {
        const value = localStorage.getItem(key);
        return value === null ? initData : parse(value)
    }

    const [state, setState] = useState<T>(getDefault(key))

    function writeState(value: any) {
        localStorage.setItem(key, valueToString(value))
        setState(value)
    }

    useEffect(() => {
        // writeState(getDefault(key));

    }, [])

    return [state, writeState]
}


