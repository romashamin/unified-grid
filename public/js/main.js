(function() {
  var COLORED_CLASS_NAME, GRID_SHOWN, HIDE_GRID_LABEL, SHOW_GRID_LABEL, toggleGrid;

  GRID_SHOWN = false;

  SHOW_GRID_LABEL = "Show Me Grid, Bitch";

  HIDE_GRID_LABEL = "Hide Grid";

  COLORED_CLASS_NAME = "colored";

  window.onload = function() {
    var button;
    button = document.createElement("input");
    button.type = "button";
    button.id = "toggle-grid";
    button.name = "grid-btn";
    button.value = SHOW_GRID_LABEL;
    document.getElementById("for-button").appendChild(button);
    return document.getElementById("toggle-grid").addEventListener('click', toggleGrid);
  };

  toggleGrid = function() {
    var button;
    document.getElementById("main").classList.toggle(COLORED_CLASS_NAME);
    document.getElementById("article").classList.toggle(COLORED_CLASS_NAME);
    document.getElementById("nav").classList.toggle(COLORED_CLASS_NAME);
    document.getElementById("aside").classList.toggle(COLORED_CLASS_NAME);
    button = document.getElementById("toggle-grid");
    if (GRID_SHOWN === true) {
      button.value = SHOW_GRID_LABEL;
      return GRID_SHOWN = false;
    } else {
      button.value = HIDE_GRID_LABEL;
      return GRID_SHOWN = true;
    }
  };

}).call(this);
