import * as React from 'react'
import { render } from 'react-dom'
import App from './views'
import { ThemeProvider } from './views/theme'
// import registerServiceWorker from './registerServiceWorker';

const mountPoint = document.getElementById('root') as HTMLElement

renderApp()

function renderApp() {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
    mountPoint,
  )
}

if (module.hot) {
  module.hot.accept('./views', () => renderApp())
}

// registerServiceWorker();
