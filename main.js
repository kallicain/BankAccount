class BankAccount {
  constructor (_accountNumber, _owner) {
    this.accountNumber = _accountNumber
    this.owner = _owner
  }

  transactions = []

  balance() {

    let sum = 0;

    if (this.transactions.length == 0) {
      console.log("No history")
    }
    
    else {
        for (let i = 0; i < this.transactions.length; i++) {
      sum += this.transactions[i].amount;
   }
   console.log(`Sum: ${sum}`)
   return sum;
   
  }
}

  deposit(amt) {
    let currTransaction = new Transaction(amt, this.owner)
  
    //if deposit amt is negative, cannot deposit
    if (amt > 0) {
      this.transactions.push(currTransaction);
      console.log("Deposit made", amt);
    } 

    else {
      console.log("Unable to deposit negative amounts or no amount.")
    }
  }

  charge(amt, payee) {
    let currTransaction = new Transaction(-amt, payee)

    //cannot make a charge greater than acct balance -> if balance is greater than charge amount can make charge, else false;
    //charge needs to be *-1 to deduct amt

    if (amt <= this.balance()) {
      this.transactions.push(currTransaction);
      console.log("Transaction approved", amt)
    }

    else {
      console.log("Transaction declined", amt)
    }
  }
}

class Transaction {

  constructor (_amount, _payee) {
    this.amount = _amount;
    this.payee = _payee;

    const d = new Date();
    this.date = d.getDay();
  }
  date;
}



let myFirstBankAccount = new BankAccount("account123", "Jillian Joseph");

let myFirstTransaction = new Transaction(12.50, "Jonathon Jackson");

myFirstBankAccount.deposit(40)
myFirstBankAccount.charge(10, "Jillian")
myFirstBankAccount.balance()