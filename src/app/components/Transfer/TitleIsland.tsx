import * as React from 'react'
import {FunctionComponent} from 'react'
import {Button, ButtonType} from "app/components/form/Button";
import './TitleIslandStyles.module.scss'
import { mdiCloseCircle } from '@mdi/js';
import Icon from '@mdi/react'
export interface TitleIslandProps{
    title:string
}

export const TitleIsland:FunctionComponent<TitleIslandProps>=(props)=>{
    const style="setColorGrey"
    const title=props.title;
    title.split("")
    const arr=[title]
    const nextLine=arr.toString()
    nextLine.split("/n")
    nextLine[0]
    return(
        <div className={"titleIsland"}>
            <span className="title">
                {props.title}
            </span>
            <div className="buttonUnderBlock">
            <Button type={ButtonType.MAIN}  >
                <span className={"centerButton"}>
                Hide
                <Icon path={mdiCloseCircle} size={2} color={"white"}/>
                </span>
            </Button>
            </div>
        </div>
    )
}
