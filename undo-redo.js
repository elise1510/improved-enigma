
let undoStack = [];
let redoStack = [];

function pushToUndoStack() {
  undoStack.push(textArea.value);
}

function undo() {
  if (undoStack.length > 0) {
    redoStack.push(textArea.value);
    textArea.value = undoStack.pop();
  }
}

function redo() {
  if (redoStack.length > 0) {
    undoStack.push(textArea.value);
    textArea.value = redoStack.pop();
  }
}

textArea.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey)&& event.key === 'z') {
    event.preventDefault();
    undo();
  } else if  ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === "z") {
    event.preventDefault();
    redo();
  } else {
    pushToUndoStack();
  }
});
module.exports = { undo, redo };