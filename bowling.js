class Bowling {
  constructor() {
    this.pinTotal = 0;
    this.evenRoll = false;
    this.frameScore = 0;
    this.isSpare = false;
  }

  roll(pins) {
   
    if(this.isSpare) {
      this.pinTotal += pins
    }


    this.pinTotal += pins;
    this.frameScore += pins;
  


    if(this.frameScore === 10) {
      this.isSpare = true
    }
    if(this.evenRoll) {
      this.frameScore = 0
    }

    this.evenRoll = !this.evenRoll;
   
    
    
  }

  



  getScore() {
    console.log(this.pinTotal)

    return this.pinTotal
  }

  
}

module.exports = Bowling;

