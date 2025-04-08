let str = " Hello JavaScript World! ";

// 1. length
console.log(str.length); 

// 2. toUpperCase()
console.log(str.toUpperCase()); 

// 3. toLowerCase()
console.log(str.toLowerCase());

// 4. charAt()
console.log(str.charAt(1)); 

// 5. indexOf()
console.log(str.indexOf("JavaScript")); 

// 6. lastIndexOf()
console.log(str.lastIndexOf("o")); 

// 7. includes()
console.log(str.includes("World"));

// 8. startsWith()
console.log(str.trim().startsWith("Hello")); 

// 9. endsWith()
console.log(str.trim().endsWith("World!"));

// 10. slice()
console.log(str.slice(1, 6)); 

// 11. substring()
console.log(str.substring(1, 6)); 

// 13. replace()
console.log(str.replace("JavaScript", "JS")); 

// 14. replaceAll()
console.log("red red red".replaceAll("red", "blue")); 

// 15. trim()
console.log(str.trim());

// 16. split()
console.log(str.trim().split(" ")); 

// 17. concat()
console.log("Hello".concat(" ", "World")); 

// 18. repeat()
console.log("ha".repeat(3)); 

// 19. match()
console.log("abc123".match(/\d+/));

// 20. padStart()
console.log("5".padStart(3, "0")); 

// 21. padEnd()
console.log("5".padEnd(3, "0")); 
