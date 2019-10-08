import * as React from 'react'
import {FunctionComponent} from "react";
import {Content} from "app/components/Transfer/Content";
import {Header} from "app/components/Transfer/Header";
import './TransferStyles.module.scss'

export interface TransferProps{

}

export const Transfer:FunctionComponent<TransferProps>=()=>{
    return(
        <div className={"Transfer"}>
            <Header/>
<Content/>

        </div>
    )
}
