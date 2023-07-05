import React from 'react';
import { Button } from '../../../ui-components';

export const ButtonStory: any = ({ text = 'Button', ...props }: any) => {
  return (
    <Button {...props}>
      <Button.Text>{text}</Button.Text>
    </Button>
  );
};
