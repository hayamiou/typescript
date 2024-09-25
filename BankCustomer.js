// Classe BankCustomer
var BankCustomer = /** @class */ (function () {
    // Constructeur pour initialiser les propriétés privées
    function BankCustomer(name, pinCode) {
        this.name = name;
        this.pinCode = pinCode;
    }
    // Méthode pour récupérer le nom du client
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    // Méthode pour vérifier si le code secret est correct
    BankCustomer.prototype.verifyPinInput = function (inputPinCode) {
        return this.pinCode === inputPinCode;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer('John Doe', '3579');
// Vérification que la méthode getName fonctionne
console.log(customer.getName() === 'John Doe' ? 'Test getName passed' : 'Test getName failed');
// Vérification que la méthode verifyPinInput fonctionne pour le bon code
console.log(customer.verifyPinInput('3579') ? 'Test verifyPinInput passed (correct PIN)' : 'Test verifyPinInput failed (correct PIN)');
// Vérification que la méthode verifyPinInput échoue pour un mauvais code
console.log(!customer.verifyPinInput('1234') ? 'Test verifyPinInput passed (incorrect PIN)' : 'Test verifyPinInput failed (incorrect PIN)');
