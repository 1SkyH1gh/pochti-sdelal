import * as React from 'react'
import {FunctionComponent} from "react";
import './MatchStyles.module.scss'
export interface MatchProps{
    title:string,

}


export const Match:FunctionComponent<MatchProps>=(props)=>{
    return(
        <div className="match">
            <div className="title">{props.title}</div>
            <div className="children">{props.children}</div>
        </div>
    )
}
