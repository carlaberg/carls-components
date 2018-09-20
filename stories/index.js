import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TestButton } from '../src/components/calles-components';

storiesOf('TestButton', module)
  .add('with text', () => (
    <TestButton onClick={action('clicked')}>Hello TestButton</TestButton>
  ))
  .add('with some emoji', () => (
    <TestButton onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></TestButton>
  )); 