const RegisterAdmin = require('../../../Domains/admins/entities/RegisterAdmin');
const RegisteredAdmin = require('../../../Domains/admins/entities/RegisteredAdmin');
const AdminRepository = require('../../../Domains/admins/AdminRepository');
const PasswordHash = require('../../security/PasswordHash');
const AddAdminUseCase = require('../AddAdminUseCase');

describe('AddAdminUseCase', () => {
  it('should orchestrating the add admin action correctly', async () => {
    const useCasePayload = {
      name: 'name',
      email: 'name@email.com',
      password: 'namepass',
    };
    const expectedRegisteredAdmin = new RegisteredAdmin({
      id: '9999',
      name: useCasePayload.name,
      email: useCasePayload.email,
    });

    const mockAdminRepository = new AdminRepository();
    const mockPasswordHash = new PasswordHash();

    mockAdminRepository.verifyAvailableEmail = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockPasswordHash.hash = jest.fn()
      .mockImplementation(() => Promise.resolve('encrypted_namepass'));
    mockAdminRepository.addAdmin = jest.fn()
      .mockImplementation(() => Promise.resolve(expectedRegisteredAdmin));

    const getAdminUseCase = new AddAdminUseCase({
      adminRepository: mockAdminRepository,
      passwordHash: mockPasswordHash,
    });

    const registeredAdmin = await getAdminUseCase.execute(useCasePayload);

    expect(registeredAdmin).toStrictEqual(expectedRegisteredAdmin);
    expect(mockAdminRepository.verifyAvailableEmail).toBeCalledWith(useCasePayload.email);
    expect(mockPasswordHash.hash).toBeCalledWith(useCasePayload.password);
    expect(mockAdminRepository.addAdmin).toBeCalledWith(new RegisterAdmin({
      name: useCasePayload.name,
      email: useCasePayload.email,
      password: 'encrypted_namepass',
    }));
  });
});
