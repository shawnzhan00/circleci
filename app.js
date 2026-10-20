function greet(name = 'world') {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(greet());
}

module.exports = { greet };
