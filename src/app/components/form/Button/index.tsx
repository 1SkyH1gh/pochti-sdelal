import * as React from "react";
import {ReactNode} from "react";
import classnames from "classnames";

import './style.module.scss';

export enum ButtonType {
    MAIN,
    SECONDARY,
    YELLOW,
    PINK,

    __VK,
    __FB,
}

export type ButtonProps = {
    children?: ReactNode,
    type: ButtonType,
    fullWidth?: boolean,
    smallPadding?: boolean,
    onClick?: () => void,
    disabled?:boolean
}

export type ButtonState = {

}

export class Button extends React.Component<ButtonProps, ButtonState> {
    render() {
        const props = this.props;
        const classname = classnames({
            'button': true,
            'button_main': props.type === ButtonType.MAIN,
            'button_yellow': props.type === ButtonType.YELLOW,
            'button_pink': props.type === ButtonType.PINK,
            'button_full-width': props.fullWidth,
            'button_small-padding': props.smallPadding
        });

        return (
            <button
                className={classname}
                type="button"
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.children}
            </button>
        );
    }
}
