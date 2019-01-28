import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { BufferView } from './decorators';
import { Button } from '../components/Button';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Press Me</Button>
  ))
  .add('rounded', () => (
    <Button onPress={action('tapped-outline')} rounded>
      Press Me
    </Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
      Press Me
    </Button>
  ));
