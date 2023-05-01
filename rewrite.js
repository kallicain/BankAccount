class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = []
  }

  balance() {
    let sum = 0;
    for(let i = 0; i < this.transactions.length; i++) {
      sum += this.transaction[i].amount;
    }
    return sum;
  }


  charge(payee, amt) {
    let currentBalance = this.balance();
    if(amt <= currentBalance) {
    let chargeTransaction = new Transaction(-amt, payee);
    this.transaction.push(chargeTransaction);
    }
  }

  deposit(amt) {
    if(amt > 0) {
    let depositTransaction = new Transaction(amt, 'Deposit');
    this.transactions.push(depositTransaction);
  }
}
}

class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}





//tests
if (typeof describe === 'function') {
  const assert = requre('assert');

  describe("testing account creation", function(){
    it('should create a new account correctly'), function(){
      let acct1 = new BankAccount('xx4432', "Kalli Cain");
      assert.equal(acct1.owner, 'Kalli Cain');
      assert.equal(acct1.accountNumber, 'xx4432');
      assert.equal(acct1.transactions.length, 0);
      assert.equal(acct1.balance(), 0);
    };

  });

  describe("testing account balance", function(){
    it('should create a new balance correctly'), function(){
      let acct1 = new BankAccount('xx4432', "Kalli Cain");
      assert.equal(acct1.balance(), 0);
      acct1.deposit(100);
      assert.equal(acct1.balance(), 100);
      acct1.charge("Target", 10);
      assert.equal(acct1.balance(), 90);
  }});


  

    it('should not allow a negative deposit'), function(){
      let acct1 = new BankAccount('xx4432', "Kalli Cain");
      assert.equal(acct1.balance(), 0);
      acct1.deposit(100);
      assert.equal(acct1.balance(), 100);
      acct1.deposit(-30);
      assert.equal(acct1.balance(), 100);
    };

    it('should not allow charging to overdraft'), function(){
      let acct1 = new BankAccount('xx4432', "Kalli Cain");
      assert.equal(acct1.balance(), 0);
      acct1.charge("Target", 30);
      assert.equal(acct1.balance(), 0);
  };

  it('should allow a refund'), function(){
    let acct1 = new BankAccount('xx4432', "Kalli Cain");
    assert.equal(acct1.balance(), 0);
    acct1.charge("Target", -30);
    assert.equal(acct1.balance(), 30);
};




  describe("#Testing transaction creation", function(){
    it('Should create a transaction correctly for a deposit', function(){
      let t1 = new Transaction(30, "Deposit");
      assert.equal(t1.amount, 30);
      assert.equal(t1.payee, "Deposit");
      assert.notEqual(t1.date, undefined);
      assert.notEqual(t1.date, null);
    });
    it('Should create a transaction correctly for a charge', function(){
      let t1 = new Transaction(-20, "Target");
      assert.equal(t1.amount, -20);
      assert.equal(t1.payee, "Target");
      assert.notEqual(t1.date, undefined);
      assert.notEqual(t1.date, null);
    });
  })

}
