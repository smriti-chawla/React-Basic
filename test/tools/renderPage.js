import {mount} from 'enzyme';
import React from 'react';

export default function renderPage(component) {
  return mount (
    <div>
      {component}
    </div>
  )
}
