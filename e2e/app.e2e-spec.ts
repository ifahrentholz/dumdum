import { DumdumPage } from './app.po';

describe('dumdum App', function() {
  let page: DumdumPage;

  beforeEach(() => {
    page = new DumdumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
