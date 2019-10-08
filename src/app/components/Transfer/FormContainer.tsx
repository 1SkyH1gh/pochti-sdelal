import * as React from 'react'
import {FunctionComponent} from 'react'
import './FormContainerStyles.module.scss'
import {BaseInput, BaseInputSize, BaseInputType} from "app/components/form/BaseInput";

export interface FormContainerProps{

}

export const FormContainer:FunctionComponent<FormContainerProps>=()=>{
    return(
        <div className={"form"}>
            <BaseInput type={BaseInputType.TEXT} size={BaseInputSize.XS}/>
        </div>
    )
}
