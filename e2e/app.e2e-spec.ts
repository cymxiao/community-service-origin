import { CommunityServicePage } from './app.po';

describe('community-service App', function() {
  let page: CommunityServicePage;

  beforeEach(() => {
    page = new CommunityServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
