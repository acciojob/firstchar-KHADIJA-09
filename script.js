function firstChar(text) {
   s = text.trim()
  if(s[0] == undefined)
  {
      return ""
  }
  return s[0]
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
