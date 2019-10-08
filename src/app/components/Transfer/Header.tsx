import * as React from 'react'
import {FunctionComponent} from "react";
import "./HeaderStyles.module.scss"
export interface HeaderProps{

}

export const Header:FunctionComponent<HeaderProps>=()=>{
    return(
        <div className={"Header"}>
            <div className={"fColumn"}/>
            <div className={"sColumn"}>
                <span>
                    Request
                </span>
                <span>
                    Current
                </span>

            </div>
        </div>
    )
}
