import * as React from 'react';
import './style.module.scss';
import {ReactNode} from "react";

type FicoProps = {
    children: ReactNode
}

type FicoState = {

}

export class Fico extends React.Component<FicoProps, FicoState> {
    render() {
        return (
            <div className="fico">
                <div className="fico__ico">

                </div>
                <div className="fico__el">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
