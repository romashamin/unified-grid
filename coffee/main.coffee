GRID_SHOWN = no
SHOW_GRID_LABEL = "Show Me Grid, Bitch"
HIDE_GRID_LABEL = "Hide Grid"
COLORED_CLASS_NAME = "colored"


window.onload = ->

  button = document.createElement("input")
  button.type  = "button"
  button.id    = "toggle-grid"
  button.name  = "grid-btn"
  button.value = SHOW_GRID_LABEL

  document.getElementById("for-button").appendChild(button)
  document.getElementById("toggle-grid").addEventListener('click', toggleGrid)


toggleGrid = ->

  document.getElementById("main").classList.toggle(COLORED_CLASS_NAME)
  document.getElementById("article").classList.toggle(COLORED_CLASS_NAME)
  document.getElementById("nav").classList.toggle(COLORED_CLASS_NAME)
  document.getElementById("aside").classList.toggle(COLORED_CLASS_NAME)

  button = document.getElementById("toggle-grid")

  if GRID_SHOWN is yes
    button.value = SHOW_GRID_LABEL
    GRID_SHOWN = no
  else
    button.value = HIDE_GRID_LABEL
    GRID_SHOWN = yes
