import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TagsInput from './index';

storiesOf('TagsInput', module)
  .add('default', () => <TagsInput />);
