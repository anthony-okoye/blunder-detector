class BlunderView {
    constructor() {
      this.moveText = document.getElementById("moveText");
      this.yesButton = document.getElementById("yesButton");
      this.noButton = document.getElementById("noButton");
      this.resultText = document.getElementById("resultText");
    }
  
    displayMove(move) {
      this.moveText.textContent = `Move: ${move.notation}`;
      this.resultText.textContent = ""; // Clear previous result
    }
  
    displayResult(isCorrect) {
      this.resultText.textContent = isCorrect ? "✅ Correct!" : "❌ Wrong!";
    }
  
    bindUserChoice(handler) {
      this.yesButton.addEventListener("click", () => handler(true));
      this.noButton.addEventListener("click", () => handler(false));
    }
  }
  