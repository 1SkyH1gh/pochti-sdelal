import * as React from "react";
import {ReactNode} from "react";

export type TicoProps = {
    children: ReactNode
}

export type TicoState = {

}

export class Tico extends React.Component<TicoProps, TicoState> {
    render(): React.ReactNode {
        return (
            <div className={"fico"}>
                <div className="fico__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}