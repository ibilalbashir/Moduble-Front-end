import { AssetDetailsModule } from './asset-details.module';

describe('AssetDetailsModule', () => {
  let assetDetailsModule: AssetDetailsModule;

  beforeEach(() => {
    assetDetailsModule = new AssetDetailsModule();
  });

  it('should create an instance', () => {
    expect(assetDetailsModule).toBeTruthy();
  });
});
