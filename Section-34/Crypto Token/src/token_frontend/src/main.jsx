import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { AuthClient } from "@dfinity/auth-client";

const init = async () => {

    const authClient = await AuthClient.create();
    if (authClient.isAuthenticated()) {
        handleAuthentication(authClient);
    } else {
        await authClient.login({
            identityProvider: "https://identity.ic0.app/#authorize",
            onSuccess: () => {
                handleAuthentication(authClient);
            }
        });
    }
}

async function handleAuthentication(authClient) {
    // console.log(await (authClient.getIdentity()._principal.toString()));
    const userPrincipal = await (authClient.getIdentity()._principal.toString());
    ReactDOM.createRoot(document.getElementById('root')).render(<App loggedInPrincipal={userPrincipal}/>);
}

init();
