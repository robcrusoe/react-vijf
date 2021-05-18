import React, { useRef, useEffect, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);

    const activate = () => {
        inputRef.current.focus();
    };

    /* Allows internal functions to be used outside of this component */
    useImperativeHandle(ref, () => {
        return {
            activate: activate
        };
    });

    return (
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
            }`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;