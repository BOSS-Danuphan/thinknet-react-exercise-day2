const fizzbuzz = (input = 15) => {
  let msg = [];
  if (input % 3 === 0) msg.push('fizz')
  if (input % 5 === 0) msg.push('buzz')
  
  return msg.length > 0 ? msg.join(' ') : input;
}

export { fizzbuzz }