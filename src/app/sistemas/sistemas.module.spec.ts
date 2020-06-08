import { SistemasModule } from './sistemas.module';

describe('SistemasModule', () => {
  let sistemasModule: SistemasModule;

  beforeEach(() => {
    sistemasModule = new SistemasModule();
  });

  it('should create an instance', () => {
    expect(sistemasModule).toBeTruthy();
  });
});
