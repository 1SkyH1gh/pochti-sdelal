import * as React from 'react'
import {FunctionComponent} from "react";
import './ItemAndIconStyles.module.scss'
export interface ItemAndIconProps{
icon:JSX.Element,
    text?:string|number|Date
}

export const ItemAndIcon:FunctionComponent<ItemAndIconProps>=(props)=>{
    return(
        <div className={"itemAndIcon"}>
            {props.icon}
            {props.text}
        </div>
    )
}
