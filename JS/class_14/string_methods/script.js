// split method: convert string into array
// we can use any separator e.g , | # etc. but must be unique
// if we do not pass any separator every char in string will become each index of array
let skills = "html,css,javascript,react";
let skills_2 = "html|css|javascript|react";

let skills_list = skills.split(",");
console.log(skills_list);
console.log(skills.split(","));
console.log(skills_2.split("|"));

// join: convert array into string
let arr_message = ["Welcome", "to", "SMIT"];
let str_message = arr_message.join(" ");
console.log(str_message);

// interview question
// Palondrome words
let str_word = "madam";
let arr_word = str_word.split("");
let rev_arr_word = arr_word.reverse();
console.log(arr_word);
let rev_str_word = rev_arr_word.join("");
console.log(rev_str_word);
