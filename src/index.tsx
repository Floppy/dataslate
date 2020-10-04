import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// Enable offline use with a service worker
// See https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.register()
