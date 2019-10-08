import * as React from 'react'
import {ChangeEvent, FunctionComponent} from 'react'
import {ItemAndIcon} from "app/components/Transfer/ItemAndIcon";
import Icon from '@mdi/react'
import './IslandContentStyles.module.scss'
import {mdiCalendarAlert} from '@mdi/js'
import {BaseInput, BaseInputSize, BaseInputType} from "app/components/form/BaseInput";
import {Button, ButtonType} from "app/components/form/Button";


export interface IslandContentProps{
    select:(e: ChangeEvent<HTMLSelectElement>)=>void,
    input:(e: ChangeEvent<HTMLInputElement>)=>void,
    renderForm:boolean,
    dropdown:()=>void
}
export interface CarsProps {
    id:number,
    model:string,
    size?:number,
    placeAmount?:number,
    invalidPlace?:number,
    color?:string,
    number?:number
}

export const Cars:CarsProps[]=[
    {model:"Rehaut",id:0},
    {model:"Tesla",id:1},
    {model:"Peugeot",id:2},
    {model:"BMW",id:3},
]



export const IslandContent:FunctionComponent<IslandContentProps>=(props)=>{


    const render=props.renderForm

    return(


        <div className={"islandContent"}>
            <div className="column">
                <div className={"tableTitle"}> Request info</div>
                <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1} color={"#97E3E5"}/>} text={"12.12.2018"} />
                <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}  color={"#97E3E5"}/>} text={"12.12.2018"}/>
                <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}  color={"#97E3E5"}/>} text={"3"}/>
                <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}  color={"#97E3E5"}/>} />
            </div>
            <div className="column">
                <div className={"tableTitle"}>
                    Return Transfer
                </div>
                <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}  color={"#97E3E5"}/>} text={"12.12.2018"}/>
                <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}  color={"#97E3E5"}/>} text={"12.12.2018"}/>
                {


                <React.Fragment>

                    {render?
                        <React.Fragment>
                            <div>{props.input + "$"}</div>
                             <Button type={ButtonType.MAIN} children={"Take the order"}/>
                        </React.Fragment>
                        :
                        <React.Fragment>
                        <BaseInput type={BaseInputType.TEXT}
                                   size={BaseInputSize.XS}
                                   placeholder={"price"}
                                   onChange={props.input}
                        />
                        <select className={"select"}
                        onChange={props.select}
                        placeholder={"choice a car"}

                        >

                    {Cars.map(car=>

                        <option value={car.model} key={car.id}>{car.model}</option>

                        )}
                        </select>
                        </React.Fragment>
                    }

                </React.Fragment>
                }
            </div>
            {
                render?
                    <div onClick={props.dropdown} className={"showMoreString"}>Show more </div>
                    :
                    ""
            }




        </div>
    )
}

