import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '../../theme'
import { Demo } from './Demo'

storiesOf('Demo', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('default', () => <Demo>Hello world!!</Demo>)
