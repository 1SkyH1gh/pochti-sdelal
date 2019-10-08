import * as React from "react";
import {SvgIconMeta} from "app/components/SvgIcon/SvgIconsStore";

import './SvgIcon.module.scss';

type SvgIconProps = {
    icon: SvgIconMeta
}
type SvgIconState = {

}

export class SvgIcon extends React.Component<SvgIconProps, SvgIconState> {
    shouldComponentUpdate(nextProps: Readonly<SvgIconProps>, nextState: Readonly<SvgIconState>, nextContext: any): boolean {
        return false;
    }

    render(): React.ReactNode {
        const icon = this.props.icon;

        const height = icon.height;
        const width = icon.width;

        return (
            <svg
                viewBox={"0 0 " + width + " " + height}
                className={"svg-icon __w-" + width + " __h-" + height}
            >
                <use href={'#' + icon.path}/>
            </svg>
        );
    }
}

