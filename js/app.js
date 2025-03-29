document.addEventListener("DOMContentLoaded", () => {
    const model = new BlunderModel();
    const view = new BlunderView();
    new BlunderController(model, view);
  });
  