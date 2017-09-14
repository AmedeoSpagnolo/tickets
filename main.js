let ledger = new Blockchain()

var tickets = ["ticket_1", "ticket_2", "ticket_3", "ticket_4", "ticket_5", "ticket_6", "ticket_7", "ticket_8", "ticket_9", "ticket_10", "ticket_11", "ticket_12", "ticket_13", "ticket_14", "ticket_15", "ticket_16", "ticket_17", "ticket_18", "ticket_19", "ticket_20"]

var users = ["Alice", "Bob", "Charlie", "Dan"]

function addNewBlock(data){
    var newIndex = ledger.getLatestIndex() + 1
    var newTime = new Date().getTime()
    ledger.addBlock(new Block(newIndex, newTime, data))
}


// init AWE tickets
addNewBlock({"AWE": tickets})
console.log(ledger.chain)
