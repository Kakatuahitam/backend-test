const RegisterAdmin = require('../../Domains/admins/entities/RegisterAdmin');

class AddAdminUseCase {
  constructor({ adminRepository, passwordHash }){
    this._adminRepository = adminRepository;
    this._passwordHash = passwordHash;
  }

  async execute(useCasePayload) {
    const registerAdmin = new RegisterAdmin(useCasePayload);
    await this._adminRepository.verifyAvailableEmail(registerAdmin.email);
    registerAdmin.password = await this._passwordHash.hash(registerAdmin.password);

    return this._adminRepository.addAdmin(registerAdmin);
  }
}

module.exports = AddAdminUseCase;
