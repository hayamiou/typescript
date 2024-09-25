// Classe BankCustomer
class BankCustomer {
  private name: string;
  private pinCode: string;

  // Constructeur pour initialiser les propriétés privées
  constructor(name: string, pinCode: string) {
      this.name = name;
      this.pinCode = pinCode;
  }

  // Méthode pour récupérer le nom du client
  public getName(): string {
      return this.name;
  }

  // Méthode pour vérifier si le code secret est correct
  public verifyPinInput(inputPinCode: string): boolean {
      return this.pinCode === inputPinCode;
  }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');

// Vérification que la méthode getName fonctionne
console.log(customer.getName() === 'John Doe' ? 'Test getName passed' : 'Test getName failed');

// Vérification que la méthode verifyPinInput fonctionne pour le bon code
console.log(customer.verifyPinInput('3579') ? 'Test verifyPinInput passed (correct PIN)' : 'Test verifyPinInput failed (correct PIN)');

// Vérification que la méthode verifyPinInput échoue pour un mauvais code
console.log(!customer.verifyPinInput('1234') ? 'Test verifyPinInput passed (incorrect PIN)' : 'Test verifyPinInput failed (incorrect PIN)');
