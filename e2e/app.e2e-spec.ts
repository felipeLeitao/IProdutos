import { IProdutosPage } from './app.po';

describe('iprodutos App', () => {
  let page: IProdutosPage;

  beforeEach(() => {
    page = new IProdutosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
