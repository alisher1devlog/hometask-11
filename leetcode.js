
function similarPairs(words) {
  let ans = 0;
  const cnt = new Map();

  for (const w of words) {
    let mask = 0;
    for (const ch of w) {
      const bit = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      mask |= 1 << bit;
    }

    const prev = cnt.get(mask) || 0;
    ans += prev;
    cnt.set(mask, prev + 1);
  }

  return ans;
}

