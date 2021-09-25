import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://6fe3e632b45a44c086068e13f3b1a783@o464596.ingest.sentry.io/5473956",
  // integrations: [
  //   new Integrations.BrowserTracing(),
  // ],
  // tracesSampleRate: 0.0,
});


ReactDOM.render(<App />, document.getElementById('root'))

// Enable offline use with a service worker
// See https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.unregister()
