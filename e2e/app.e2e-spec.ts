import { Ng2BoostrapSTARTERPage } from './app.po';

describe('ng2-boostrap-starter App', function() {
  let page: Ng2BoostrapSTARTERPage;

  beforeEach(() => {
    page = new Ng2BoostrapSTARTERPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
