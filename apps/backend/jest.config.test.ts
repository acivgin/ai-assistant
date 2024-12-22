import jestConfig from './jest.config';

describe('Jest Configuration', () => {
  it('should have the correct displayName', () => {
    expect(jestConfig.displayName).toBe('backend');
  });

  it('should use ts-jest preset', () => {
    expect(jestConfig.preset).toBe('ts-jest');
  });

  it('should have node as testEnvironment', () => {
    expect(jestConfig.testEnvironment).toBe('node');
  });

  it('should include correct moduleFileExtensions', () => {
    expect(jestConfig.moduleFileExtensions).toEqual(['ts', 'js', 'json']);
  });

  it('should have correct rootDir', () => {
    expect(jestConfig.rootDir).toBe('src');
  });

  it('should use correct testRegex', () => {
    expect(jestConfig.testRegex).toBe('.*\\.spec\\.ts$');
  });

  it('should have correct transform configuration', () => {
    expect(jestConfig.transform).toEqual({
      '^.+\\.(t|j)s$': 'ts-jest',
    });
  });

  it('should collect coverage from correct files', () => {
    expect(jestConfig.collectCoverageFrom).toEqual(['**/*.(t|j)s']);
  });

  it('should have correct coverageDirectory', () => {
    expect(jestConfig.coverageDirectory).toBe('../coverage');
  });

  it('should limit maxWorkers to 2', () => {
    expect(jestConfig.maxWorkers).toBe(2);
  });

  it('should have testTimeout set to 30000', () => {
    expect(jestConfig.testTimeout).toBe(30000);
  });
});
