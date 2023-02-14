const AdminRepository = require('../AdminRepository');

describe('AdminRepository interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
    const adminRepository = new AdminRepository();

    await expect(adminRepository.addAdmin({})).rejects.toThrowError('ADMIN_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(adminRepository.verifyAvailableEmail('')).rejects.toThrowError('ADMIN_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
