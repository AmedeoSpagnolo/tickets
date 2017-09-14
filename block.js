var SHA256 = CryptoJS.SHA256

class Block{
  constructor(index, timestamp, data, previousHash = ''){
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.hash = this.calculateHash()
  }

  calculateHash(){
    return SHA256(this.index + this.timestamp + this.timestamp + JSON.stringify(this.data)).toString()
  }
}
