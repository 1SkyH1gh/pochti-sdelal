// render react DOM
import * as ReactDOM from "react-dom";
import * as React from "react";
import {hot} from "react-hot-loader";
import {SvgIconMeta, SvgIconsStore} from "app/components/SvgIcon/SvgIconsStore";
import {SvgIcon} from "app/components/SvgIcon/SvgIcon";

import './icons.module.scss';

type ColoredContainerState = {
    selectedColor: string
}

class ColoredContainer extends React.Component<{}, ColoredContainerState> {
    colors : Array<string>;

    constructor(props) {
        super(props);

        this.colors = [
            '#fff',
            '#000',
        ];

        this.state = {
            selectedColor: this.colors[0]
        }
    }

    render(): React.ReactNode {
        return (
            <div className="container" style={{backgroundColor: this.state.selectedColor}}>
                <div className="toolbar">
                    {this.colors.map(c => {
                        return (
                            <div className={"color"} style={{backgroundColor: c}} key={c} onClick={() => this.setState({selectedColor: c})}/>
                        )
                    })}

                    <input type="color" className={"custom-color"} onChange={(e) => this.setState({selectedColor: e.target.value})}/>

                </div>

                <div className="inner-container">
                    <AllIcons/>
                </div>
            </div>
        )
    }
}

class AllIcons extends React.Component {


    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        return false;
    }

    render(): React.ReactNode {
        const icons : Array<{name: string, meta : SvgIconMeta}> = [];

        for (let key in SvgIconsStore) {
            if (SvgIconsStore.hasOwnProperty(key)) {
                icons.push({
                    name: key,
                    meta: SvgIconsStore[key]
                });
            }
        }

        return (
            <table>
                <tbody>
                    {icons.map(i => {
                        return (
                            <tr key={i.name}>
                                <td>
                                    <div className="icons">
                                        <div className="icon icon-1"><SvgIcon icon={i.meta}/></div>
                                        {i.meta.width < 100
                                            ? (
                                                <div className="icon icon-2"><SvgIcon icon={i.meta}/></div>
                                            )
                                            : null
                                        }
                                    </div>
                                </td>

                                <td>
                                    <div className="code">
                                        SvgIconsStore.{i.name}
                                    </div>
                                </td>

                                <td>
                                    <div className="code">
                                        ./src/app/svg/{i.meta.path}
                                    </div>
                                </td>

                                <td>
                                    <div className="code">
                                        {i.meta.width} x {i.meta.height}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

const App = hot(module)(ColoredContainer);


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

