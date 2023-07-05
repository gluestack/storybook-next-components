import ButtonMeta from './components/src/components/Forms/Button/Button.stories';
import { ButtonStory } from './components/src/components/Forms/Button/Button';

import ButtonGroupMeta from './components/src/components/Forms/Button/ButtonGroup.stories';
import { ButtonGroupStory } from './components/src/components/Forms/Button/ButtonGroup';

import TextMeta from './components/src/components/Typography/Text/Text.stories';
import { TextStory } from './components/src/components/Typography/Text/Text';

import InputMeta from './components/src/components/Forms/Input/Input.stories';
import { InputStory } from './components/src/components/Forms/Input/Input';

import CheckboxMeta from './components/src/components/Forms/Checkbox/Checkbox.stories';
import { CheckboxStory } from './components/src/components/Forms/Checkbox/Checkbox';

export default {
  Button: {
    meta: ButtonMeta,
    story: ButtonStory,
  },
  ButtonGroup: {
    meta: ButtonGroupMeta,
    story: ButtonGroupStory,
  },
  Text: {
    meta: TextMeta,
    story: TextStory,
  },
  Input: {
    meta: InputMeta,
    story: InputStory,
  },
  Checkbox: {
    meta: CheckboxMeta,
    story: CheckboxStory,
  },
} as any;
