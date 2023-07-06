import ButtonMeta from './components/stories/Forms/Button/Button.stories';
import { ButtonStory } from './components/stories/Forms/Button/Button';

import TextMeta from './components/stories/Typography/Text/Text.stories';
import { TextStory } from './components/stories/Typography/Text/Text';

import InputMeta from './components/stories/Forms/Input/Input.stories';
import { InputStory } from './components/stories/Forms/Input/Input';

export default {
  Button: {
    meta: ButtonMeta,
    story: ButtonStory,
  },
  Text: {
    meta: TextMeta,
    story: TextStory,
  },
  Input: {
    meta: InputMeta,
    story: InputStory,
  },
} as any;
