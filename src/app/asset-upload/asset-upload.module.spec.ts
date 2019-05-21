import { AssetUploadModule } from './asset-upload.module';

describe('AssetUploadModule', () => {
  let assetUploadModule: AssetUploadModule;

  beforeEach(() => {
    assetUploadModule = new AssetUploadModule();
  });

  it('should create an instance', () => {
    expect(assetUploadModule).toBeTruthy();
  });
});
