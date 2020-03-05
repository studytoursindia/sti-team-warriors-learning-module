import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import { loadFontsForStorybook } from '../src/utils/index';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

addDecorator(story => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
));
loadFontsForStorybook();
