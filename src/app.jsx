import { Provider } from 'react-redux'
import store from './store'
import Routers from './routers'

export default function App() {
    return(
        <Provider store={store}>
                <Routers/>
        </Provider>
    )
}