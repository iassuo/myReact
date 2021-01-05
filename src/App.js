import React from 'react'
import { Globalstyle } from './style';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends React.Component {
    render() {
        return (
            <div>
                <Globalstyle />
                <Provider store={store}>
                    <BrowserRouter>
                        <Header />
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/login' exact component={Login}></Route>
                            <Route path='/detail/:id' exact component={Detail}></Route>
                            <Route path='/write' exact component={Write}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default App;
