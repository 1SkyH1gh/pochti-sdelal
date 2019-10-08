import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import './main.module.scss';
import {Root} from "app/containers/Root";
import {Transfer} from "app/components/Transfer/Transfer";


class AppMainContainer extends React.Component<{history: any}, {}> {
    render() {
        return (
            <Root>
                <HashRouter>
                    <Switch>
                        <Route exact path={"/"} component={Transfer} />
                    </Switch>
                </HashRouter>
            </Root>
        )
    }
}

export const App = hot(module)(AppMainContainer);
