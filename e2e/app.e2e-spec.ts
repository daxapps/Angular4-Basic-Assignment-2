import { BasicsAssignment2Page } from './app.po';

describe('basics-assignment2 App', () => {
  let page: BasicsAssignment2Page;

  beforeEach(() => {
    page = new BasicsAssignment2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
