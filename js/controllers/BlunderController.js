class BlunderController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.bindUserChoice(this.handleUserChoice.bind(this));
  
      this.init();
    }
  
    async init() {
      await this.model.fetchMoves();
      this.loadNextMove();
    }
  
    loadNextMove() {
      const move = this.model.getNextMove();
      if (move) {
        this.view.displayMove(move);
      } else {
        this.view.moveText.textContent = "Game Over!";
      }
    }
  
    handleUserChoice(userChoice) {
      const isCorrect = this.model.checkBlunder(userChoice);
      this.view.displayResult(isCorrect);
      setTimeout(() => this.loadNextMove(), 1500);
    }
  }
  