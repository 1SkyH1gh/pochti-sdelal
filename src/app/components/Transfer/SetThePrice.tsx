import * as React from 'react'
import {FunctionComponent} from 'react'
import {Button, ButtonType} from "app/components/form/Button";
import './SetThePriceStyles.module.scss'
export interface SetThePriseProps{
    disabled?:boolean
    type:ButtonType
    text?:string
    handleClick?:()=>void,

}

export const SetThePrice:FunctionComponent<SetThePriseProps>=(props)=>{

    return(
        <div className="priceBlock">
          <div className="cont">
            <Button type={props.type} children={"set the price"} disabled={props.disabled} onClick={props.handleClick} />
            <div className="alert">{props.text}</div>
          </div>
        </div>
    )
}
