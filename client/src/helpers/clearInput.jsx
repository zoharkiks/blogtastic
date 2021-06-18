export const clearInput = () =>{
    Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
}

export const clearComment = () =>{
  Array.from(document.querySelectorAll("textarea")).forEach(
      (textarea) => (textarea.value = "")
    );
}
