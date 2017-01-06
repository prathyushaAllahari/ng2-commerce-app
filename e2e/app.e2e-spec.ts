import { Ng2CommerceAppPage } from './app.po';

describe('ng2-commerce-app App', function() {
  let page: Ng2CommerceAppPage;

  beforeEach(() => {
    page = new Ng2CommerceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
