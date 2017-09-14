let ledger = new Blockchain()

function checkIfValid(data, sender, receiver){
  // sender has no ticket
  if (!data[sender] || data[sender] < 1) {
    alert(sender + " has no tickets to transfer")
    return false
  }
  // sender = receivers
  if (sender == receiver){
    alert("sender == receiver")
    return false
  }
  // ticket not refundable
  if (receiver == "AWE"){
    alert("ticket not refundable")
    return false
  }
  // max 6 tickets per person
  if (data[receiver] >= 6){
    alert("max 6 tickets per person")
    return false
  }
  return true
}

function printStatus(status){
  $("#status").empty()
  for (var key in status) {
    if(status[key] > 0){
      $("#status").append("<p>" + key + ": " + status[key] + "</p>")
    }
  }
}

function addNewBlock(sender, receiver){
  var data = ledger.getLatestBlock().data
  if(checkIfValid(data, sender, receiver)){
    data[sender] -= 1
    data[receiver] ? data[receiver] += 1 : data[receiver] = 1
    var newIndex = ledger.getLatestIndex() + 1
    var newTime = new Date().getTime()
    ledger.addBlock(new Block(newIndex, newTime, data))
    console.log(ledger.chain[ledger.chain.length-1].data)
    printStatus(ledger.chain[ledger.chain.length-1].data)
  } else {
    console.log("invalid transaction");
  }
}

function initLedger(){
  $.getJSON("ledger.json", function(json) {
    ledger.addBlock(new Block(1, new Date().getTime(), json))
    console.log(json);
  })
}

$(document).ready(function() {

  // init
  initLedger()

  // load users in ui
  users.forEach(function(user){
    $("#transaction [name='senders']").append("<option value='"+user+"'>"+user+"</option>")
    $("#transaction [name='receivers']").append("<option value='"+user+"'>"+user+"</option>")
  })

  // listening form
  $('#transaction').on("submit", function(event){
    event.preventDefault();
    var sender = $(this).children("[name='senders']").val()
    var receiver = $(this).children("[name='receivers']").val()
    addNewBlock(sender, receiver)
  })
});
