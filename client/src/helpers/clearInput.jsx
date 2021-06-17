export const clearInput = () =>{
    Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
}