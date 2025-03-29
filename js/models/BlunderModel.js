class BlunderModel {
    constructor() {
      this.moves = []; // Store fetched moves
      this.currentMove = null;
    }
  
    async fetchMoves() {
      const response = await fetch("data/moves.json"); // Replace with actual API or local file
      this.moves = await response.json();
    }
  
    getNextMove() {
      if (this.moves.length === 0) return null;
      this.currentMove = this.moves.shift(); // Get the next move
      return this.currentMove;
    }
  
    checkBlunder(userChoice) {
      return userChoice === this.currentMove.isBlunder;
    }
  }
  