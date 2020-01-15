const levenshteinDistance = (str1: string = '', str2: string) => {
  let x = str1.length;
  let y = str2.length;

  let d = [];
  for (let i = 0; i <= x; i++) {
    d[i] = [];
    d[i][0] = i;
  }
  for (let i = 0; i <= y; i++) {
    d[0][i] = i;
  }

  let cost = 0;
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      cost = str1[i - 1] == str2[j - 1] ? 0 : 1;

      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
    }
  }
  return 1 - d[x][y] / str1.length;
};

export default levenshteinDistance;
