// OPERAÇÃO BANCÁRIA
// Crie um programa para realizar operações bancárias na conta de um usuário.
const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

// TRANSAÇÕES
// Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:
function createTransaction(transaction) {
  user.transactions.push(transaction);

  if (transaction.type === "credit") {
    user.balance = user.balance + transaction.value;
  } else {
    user.balance = user.balance - transaction.value;
  }
}

// RELATÓRIOS
// Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:
function getHigherTransactionByType(type) {
  let higherTransaction;
  let higherValue = 0;

  for (let transaction of user.transactions) {
    if (transaction.type == type && transaction.value > higherValue) {
      higherValue = transaction.value;
      higherTransaction = transaction;
    }
  }
  return higherTransaction;
} // { type: 'credit', value: 120 }

// Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:
function getAverageTransactionValue() {
  let sum = 0;

  for (let transaction of user.transactions) {
    sum += transaction.value;
  }
  return sum / user.transactions.length;
}

function getTransactionsCount() {
  let count = {
    credit: 0,
    debit: 0,
  };
  for (let transaction of user.transactions) {
    if (transaction.type === "credit") count.credit++;
    else count.debit++;
  }
  return count;
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "credit", value: 220 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60
console.table(user.transactions);
console.log(user.transactions);

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }
