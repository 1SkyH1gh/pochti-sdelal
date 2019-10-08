import * as React from 'react'
import {FunctionComponent} from "react";
import './ShowMoreStyles.module.scss'
import {Match} from "app/components/Transfer/Match";
export interface ShowMoreProps{

}



export const ShowMore:FunctionComponent<ShowMoreProps>=()=>{
    return(
        <div className="dropdown">
                <Match title={"total"}>

                    5 persons:
                    -children
                    -disabled
                </Match>
            <Match title={"baggage"}>
                -small
                -medium
                -hard
            </Match>
            <Match title={"car"}>
                    Tesla
                    Peugeot
            </Match>
            <Match title={"client"}>
                Sarah Parket
                +375243242
                @mail.ru
            </Match>
            <Match title={"name sign"}>
                Parkers Family
            </Match>
            <Match title={"requeierennts"} >
                lorem ipsun dolor amet sin amet tema nis rolod nuspi merol

            </Match>
        </div>
    )
}
