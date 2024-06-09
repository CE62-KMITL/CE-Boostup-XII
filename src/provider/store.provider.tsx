import { store, persistor } from "../store/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <Outlet />
            </PersistGate>
        </Provider>
    );
}