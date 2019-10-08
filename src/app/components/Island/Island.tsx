import * as React from "react";
import {ReactNode} from "react";
import './Island.module.scss';

export type IslandProps = {
    children: ReactNode
}

export class Island extends React.Component<IslandProps, {}> {


    render() {
        return (
            <div className="island">
                {this.props.children}
            </div>
        )
    }
}
