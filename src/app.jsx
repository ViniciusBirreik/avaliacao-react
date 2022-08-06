import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import Routers from './routers'

export default function App() {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routers/>
            </PersistGate>
        </Provider>
    )
}