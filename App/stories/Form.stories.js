import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { BufferView } from '../stories/decorators';
import { Form, FieldWrapper, TextInput, Switch } from '../components/Form';

const defaultTextInputProps = {
  label: 'Reaktor Demo',
  onChangeText: action('onChangeText')
};

storiesOf('Form', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Form>
      <View style={{ flex: 1, backgroundColor: '#e6e6e6' }} />
    </Form>
  ))
  .add('with header', () => (
    <Form header="Hello">
      <View style={{ flex: 1, backgroundColor: '#e6e6e6' }} />
    </Form>
  ))
  .add('with header and subheader', () => (
    <Form header="Hello" subheader="Please fill in your details">
      <View style={{ flex: 1, backgroundColor: '#e6e6e6' }} />
    </Form>
  ));

storiesOf('Form/FieldWrapper', module)
  .addDecorator(BufferView)
  .add('default', () => <FieldWrapper label="username" />)
  .add('with error', () => (
    <FieldWrapper
      label="username"
      message="username is required!"
      messageType="error"
    />
  ))
  .add('multiple fields', () => (
    <React.Fragment>
      <FieldWrapper label="username" />
      <FieldWrapper label="password" />
      <FieldWrapper label="confirm password" />
    </React.Fragment>
  ));

storiesOf('Form(TextInput', module)
  .addDecorator(BufferView)
  .add('default', () => <TextInput {...defaultTextInputProps} />)
  .add('with placeholder', () => (
    <TextInput
      placeholder="Reaktor demo placeholder"
      {...defaultTextInputProps}
    />
  ))
  .add('with value', () => (
    <TextInput value="Reaktor demo placeholder" {...defaultTextInputProps} />
  ))
  .add('with error message', () => (
    <TextInput
      message="This is an error message"
      messageType="error"
      {...defaultTextInputProps}
    />
  ))
  .add('email', () => (
    <TextInput
      label="Email"
      value="kimmo.j.taskinen@gmail.com"
      keyboardType="email-address"
      {...defaultTextInputProps}
    />
  ))
  .add('password', () => (
    <TextInput
      label="Password"
      value="password"
      secureTextEntry
      {...defaultTextInputProps}
    />
  ));

storiesOf('Form/Switch', module)
  .addDecorator(BufferView)
  .add('default', () => <Switch label="Agree to Terms" value />)
  .add('error', () => (
    <Switch
      label="Agree to Terms"
      message="You must agree to the Terms"
      messageType="error"
    />
  ));
