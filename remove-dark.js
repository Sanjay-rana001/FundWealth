const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  // Replace all dark:* classes. Regex handles standard chars plus brackets and hashes for arbitrary values.
  content = content.replace(/dark:[\w\-\/\[\]#]+/g, '');
  
  // Clean up double spaces left behind in class names
  content = content.replace(/ {2,}/g, ' ');
  content = content.replace(/ className=" /g, ' className="');
  content = content.replace(/ "\}/g, '"}');

  if (content !== original) {
    fs.writeFileSync(file, content);
    changedCount++;
    console.log('Cleaned:', file);
  }
});

console.log(`Successfully removed dark mode from ${changedCount} files.`);
