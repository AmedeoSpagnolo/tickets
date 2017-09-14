let ledger = new Blockchain()

users = ["AWE", "Bob", "Charlie", "Dan"]

function addNewBlock(index, time, data){
  ledger.addBlock(new Block(index, time, data))
}

console.log(ledger)
