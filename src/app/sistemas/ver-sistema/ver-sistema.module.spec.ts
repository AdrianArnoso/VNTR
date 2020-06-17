import { VerSistemaModule } from './ver-sistema.module';

describe('VerSistemaModule', () => {
  let verSistemaModule: VerSistemaModule;

  beforeEach(() => {
    verSistemaModule = new VerSistemaModule();
  });

  it('should create an instance', () => {
    expect(verSistemaModule).toBeTruthy();
  });
});
