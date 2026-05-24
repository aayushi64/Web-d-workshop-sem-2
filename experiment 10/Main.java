//Abstract class
abstract class BankAccount {
    int accountNumber;
    String accountHolderName;
    double balance;
//Constructor
BankAccount(int accountNumber, String accountHolderName, double balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
}
//Deposit Method
void deposit(double amount){
    balance = balance + amount;
    System.out.println("Amount Deposited:" + amount);
}
//Display Account Details
void displayDetails() {
    System.out.println("Account Number: " + accountNumber);
    System.out.println("Account Holder Name: " + accountHolderName);
    System.out.println("Balance: " + balance);      
}
//Abstract Method
abstract void calculateInterest();
}
//Savings Account Class
class SavingsAccount extends BankAccount {
    SavingsAccount(int accountNumber, String accountHolderName, double balance){
        super(accountNumber, accountHolderName, balance);
    }
    @Override
    void calculateInterest() { 
        double interest = balance * 0.05; // 5% interest
        System.out.println("Interest Added: " + interest);
    }
}
//Current Account Class
class CurrentAccount extends BankAccount {
    CurrentAccount(int accountNumber, String accountHolderName, double balance){
        super(accountNumber, accountHolderName, balance);
    }
void calculateInterest() {
        double interest = balance*0.02; // 2% interest
        System.out.println("Current Account Interest: " + interest);
    }
}
//Main Class
public class Main {
    public static void main(String[] args) {
        SavingsAccount sa = new SavingsAccount(101, "Aayushi", 10000);
        CurrentAccount ca = new CurrentAccount(102, "Aditi", 20000);
        System.out.println("----Savings Account -----");
        sa.deposite(2000);
        sa.displayDetails();
        sa.calculateInterest();
        System.out.println("----Current Account -----");
        ca.deposite(3000);
        ca.displayDetails();
        ca.calculateInterest();
    }
}