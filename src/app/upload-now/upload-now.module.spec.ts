import { UploadNowModule } from './upload-now.module';

describe('UploadNowModule', () => {
  let uploadNowModule: UploadNowModule;

  beforeEach(() => {
    uploadNowModule = new UploadNowModule();
  });

  it('should create an instance', () => {
    expect(uploadNowModule).toBeTruthy();
  });
});
