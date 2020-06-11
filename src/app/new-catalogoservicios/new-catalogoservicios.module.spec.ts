import { NewCatalogoserviciosModule } from './new-catalogoservicios.module';

describe('NewCatalogoserviciosModule', () => {
  let newCatalogoserviciosModule: NewCatalogoserviciosModule;

  beforeEach(() => {
    newCatalogoserviciosModule = new NewCatalogoserviciosModule();
  });

  it('should create an instance', () => {
    expect(newCatalogoserviciosModule).toBeTruthy();
  });
});
