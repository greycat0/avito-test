import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>

            </Provider>
        )
    }
}

export default App