jest.mock('node-fetch');
const fetch = require('node-fetch');
const { checkForUpdate } = require('../src/updateCheck');

const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

afterEach(() => {
  fetch.mockReset();
  logSpy.mockClear();
});

afterAll(() => {
  logSpy.mockRestore();
});

describe('checkForUpdate', () => {
  test('logs when update is available', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ version: '00.00.02' })
    });
    await checkForUpdate('http://example.com', '00.00.01');
    expect(logSpy).toHaveBeenCalledWith('Update available: 00.00.02');
  });

  test('logs when no update is available', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ version: '00.00.01' })
    });
    await checkForUpdate('http://example.com', '00.00.01');
    expect(logSpy).toHaveBeenCalledWith('No update available');
  });

  test('reads version from local file', async () => {
    const fs = require('fs').promises;
    const path = require('path');
    const file = path.join(__dirname, 'latest.json');
    await fs.writeFile(file, JSON.stringify({ version: '00.00.02' }));
    await checkForUpdate(`file://${file}`, '00.00.01');
    expect(logSpy).toHaveBeenCalledWith('Update available: 00.00.02');
    await fs.unlink(file);
  });
});
