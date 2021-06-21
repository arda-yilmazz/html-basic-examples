function slug(string) {
  return string
    .toUpperCase()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/\s+/g, '-')
    .replace(/[^\w+\-]+/g, '')
}
console.log(slug("ığüöçşİÜĞŞÇ"));
