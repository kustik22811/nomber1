import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
$ cat App.js
import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
        const [activePanel, setActivePanel] = useState('home');
        const [fetchedUser, setUser] = useState(null);
        const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

        useEffect(() => {
                bridge.subscribe(({ detail: { type, data }}) => {
                        if (type === 'VKWebAppUpdateConfig') {
                                const schemeAttribute = document.createAttribute('scheme');
                                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                                document.body.attributes.setNamedItem(schemeAttribute);
                        }
                });
                async function fetchData() {
                        const user = await bridge.send('VKWebAppGetUserInfo');
                        setUser(user);
                        setPopout(null);
                }
                fetchData();
        }, []);

        const go = e => {
                setActivePanel(e.currentTarget.dataset.to);
        };

        return (
                <View activePanel={activePanel} popout={popout}>
                        <Home id='home' fetchedUser={fetchedUser} go={go} />
                        <Persik id='persik' go={go} />
                </View>
        );
}

export default App;
