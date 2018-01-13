import { Angular.Web.V1Page } from './app.po';

describe('angular.web.v1 App', () => {
  let page: Angular.Web.V1Page;

  beforeEach(() => {
    page = new Angular.Web.V1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
