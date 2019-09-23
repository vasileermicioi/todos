import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { text, boolean } from '@storybook/addon-knobs/react'

storiesOf('example/Button', module)
  .add('default', () => (
    <Button
      label={text('label', 'Enroll')}
      disabled={boolean('disabled', false)}
      onClick={() => alert('hello there')}
    />
  ))
  .add('disabled', () => (
    <Button
      label={text('label', 'Disabled')}
      disabled={true}
      onClick={() => alert('will not trigger')}
    />
  ))
