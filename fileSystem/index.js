const fs = require("fs");

// create or write
fs.writeFile("info.txt", "it's demo of fs", (err) => {
  if (err) console.log(err);
  else console.log(`done`);
});

// Append
fs.appendFile("info.txt", " which is writter in js.", (err) => {
  if (err) console.log(err);
  else console.log(`append successfully`);
});

//Rename file
fs.rename("info.txt", "information.txt", (err) => {
  if (err) console.log(err);
  else console.log(`successfully rename`);
});

//Rename file
fs.copyFile("information.txt", "./copy/cpyInformation.txt", (err) => {
  if (err) console.log(err);
  else console.log(`successfully  copy file`);
});
