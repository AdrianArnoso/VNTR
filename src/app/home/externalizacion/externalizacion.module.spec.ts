import { ExternalizacionModule } from './externalizacion.module';

describe('ExternalizacionModule', () => {
  let externalizacionModule: ExternalizacionModule;

  beforeEach(() => {
    externalizacionModule = new ExternalizacionModule();
  });

  it('should create an instance', () => {
    expect(externalizacionModule).toBeTruthy();
  });
});
