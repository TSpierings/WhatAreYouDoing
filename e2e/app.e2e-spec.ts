import { WhatAreYouDoingPage } from './app.po';

describe('what-are-you-doing App', () => {
  let page: WhatAreYouDoingPage;

  beforeEach(() => {
    page = new WhatAreYouDoingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
