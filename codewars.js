https://www.codewars.com/kata/69466788ccceb1573f2000e6/train/javascript

/**
 * Computes the Seq(n) sequence value modulo 1_000_003.
 * 
 * @param {number} n - Input: unsigned integer (1 ≤ n ≤ 3000)
 * @returns {number} Output: unsigned integer (0 ≤ result < 1_000_003)
 */
function seq(n) {
  const MAGIC = 1_000_003;
  
  function f(n, mul) {
    let product = 1;
    let acc = 0;
    for (let i = 0; i < n; i++) {
      acc = (acc + product) % MAGIC;
      product = ((product * mul) % MAGIC + 1) % MAGIC
    }
    return acc;
  }
  
  let sum = 1;
  let mul = 1;  // store n^m
  for (let i = 0; i < n; i++) {
    sum = sum * f(n, mul) % MAGIC
    mul = (mul * n) % MAGIC;    
  }
  
  return sum;
}
  
  /*
  
  n: 3
  [1, 1, 1]
  1 + 2 + 3 = A
  
  [A, A, A]
  A + (n+1)*A + ((n+1)n+1)A = B = (n^2 + 2n+ 3) * A
    
  [B, B, B]
  B + (n^2+1)B + ((n^2+1)n^2+1)B = C = 1 + m + 1 + m^2+m +1 = (m^2 + 2m + 3)*B where m = n^2
  
  
  f(n, m) = SUMMATION_i=1,n(i*m^(n-i))
  
  In general:
  
  S[0] = 1
  Let S[i] = Sum after step i  (i = 0, ..., n-1)
  
  S[i+1] = S[i] * f(n, n^i) 

---


   n = 4
   f(4, 0) = 4 + 3 + 2 + 1 = A     =           1   + 2      + 3      + 4
   f(4, 1) = 4^3 + 2*4^2 + 3*4 + 4 =           4^3 + 2(4^2) + 3(4^1) + 4
   f(4, 2) = (4^2)^3 + 2(4^2)^2 + 3(4^2) + 4 = 4^6 + 2(4^4) + 3(4^2) + 4
   f(4, 3) = (4^3)^3 + 2(4^3)^2 + 3(4^3) + 4 = 4^9 + 2(4^6) + 3(4^3) + 4
  
    
  
  */
