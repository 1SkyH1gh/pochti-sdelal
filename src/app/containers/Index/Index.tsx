import * as React from "react";
import {Island} from "app/components/Island/Island";
import {SvgIcon} from "app/components/SvgIcon/SvgIcon";
import {SvgIconsStore} from "app/components/SvgIcon/SvgIconsStore";

type IndexProps = {

}

type IndexState = {

}

export class Index extends React.Component<IndexProps, IndexState> {
    render(): React.ReactNode {
        // todo ...

        return (
            <Island>
                <SvgIcon icon={SvgIconsStore.BABY_SEAT__25}/>
                <br/>
                "hello world!"
                <br/>
                <a href="/icons">Icons</a>
            </Island>
        )
    }
}