import { NgAdministradorDeportivoPage } from './app.po';

describe('ng-administrador-deportivo App', function() {
  let page: NgAdministradorDeportivoPage;

  beforeEach(() => {
    page = new NgAdministradorDeportivoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
