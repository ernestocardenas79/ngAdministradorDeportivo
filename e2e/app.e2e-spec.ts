import { AdministrdordeportivoPage } from './app.po';

describe('administrdordeportivo App', function() {
  let page: AdministrdordeportivoPage;

  beforeEach(() => {
    page = new AdministrdordeportivoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
