// this program is a JavaScript version of Mersenne Twister, with concealment and encapsulation in class,
// an almost straight conversion from the original program, mt19937ar.c,
// translated by y. okada on July 17, 2006.
// and modified a little at july 20, 2006, but there are not any substantial differences.
// in this program, procedure descriptions and comments of original source code were not removed.
// lines commented with //c// were originally descriptions of c procedure. and a few following lines are appropriate JavaScript descriptions.
// lines commented with /* and */ are original comments.
// lines commented with // are additional comments in this JavaScript version.
// before using this version, create at least one instance of MersenneTwister19937 class, and initialize the each state, given below in c comments, of all the instances.
/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_genrand(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/

class MersenneTwister19937 {
  private N: number = 624;
  private M: number = 397;
  private MATRIX_A: number = 0x9908b0df;
  private UPPER_MASK: number = 0x80000000;
  private LOWER_MASK: number = 0x7fffffff;
  private mt: number[] = new Array(this.N); // state vector array
  private mti: number = this.N + 1; // mti==N+1 means mt[N] is not initialized
  private mag01: number[] = [0x0, this.MATRIX_A]; // For optimization in the main loop

  constructor(seed?: number) {
    if (seed !== undefined) {
      this.init_genrand(seed);
    }
  }

  private unsigned32(n1: number): number {
    return n1 >>> 0;
  }

  private subtraction32(n1: number, n2: number): number {
    return n1 < n2
      ? this.unsigned32((0x100000000 - (n2 - n1)) & 0xffffffff)
      : n1 - n2;
  }

  private addition32(n1: number, n2: number): number {
    return this.unsigned32((n1 + n2) & 0xffffffff);
  }

  private multiplication32(n1: number, n2: number): number {
    let sum = 0;
    for (let i = 0; i < 32; ++i) {
      if ((n1 >>> i) & 0x1) {
        sum = this.addition32(sum, this.unsigned32(n2 << i));
      }
    }
    return sum;
  }

  public init_genrand(seed: number): void {
    this.mt[0] = this.unsigned32(seed & 0xffffffff);
    for (this.mti = 1; this.mti < this.N; this.mti++) {
      this.mt[this.mti] = this.addition32(
        this.multiplication32(
          1812433253,
          this.unsigned32(
            this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30),
          ),
        ),
        this.mti,
      );
      this.mt[this.mti] = this.unsigned32(this.mt[this.mti] & 0xffffffff);
    }
  }

  public init_by_array(init_key: number[], key_length: number): void {
    this.init_genrand(19650218);
    let i = 1;
    let j = 0;
    let k = this.N > key_length ? this.N : key_length;
    for (; k; k--) {
      this.mt[i] = this.addition32(
        this.addition32(
          this.unsigned32(
            this.mt[i] ^ this.multiplication32(
              this.unsigned32(this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)),
              1664525,
            ),
          ),
          init_key[j],
        ),
        j,
      );
      this.mt[i] = this.unsigned32(this.mt[i] & 0xffffffff);
      i++;
      j++;
      if (i >= this.N) {
        this.mt[0] = this.mt[this.N - 1];
        i = 1;
      }
      if (j >= key_length) j = 0;
    }
    for (k = this.N - 1; k; k--) {
      this.mt[i] = this.subtraction32(
        this.unsigned32(
          this.mt[i] ^ this.multiplication32(
            this.unsigned32(this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)),
            1566083941,
          ),
        ),
        i,
      );
      this.mt[i] = this.unsigned32(this.mt[i] & 0xffffffff);
      i++;
      if (i >= this.N) {
        this.mt[0] = this.mt[this.N - 1];
        i = 1;
      }
    }
    this.mt[0] = 0x80000000; // MSB is 1; assuring non-zero initial array
  }

  public genrand_int32(): number {
    let y: number;
    if (this.mti >= this.N) {
      let kk: number;
      for (kk = 0; kk < this.N - this.M; kk++) {
        y = this.unsigned32(
          (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK),
        );
        this.mt[kk] = this.unsigned32(
          this.mt[kk + this.M] ^ (y >>> 1) ^ this.mag01[y & 0x1],
        );
      }
      for (; kk < this.N - 1; kk++) {
        y = this.unsigned32(
          (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK),
        );
        this.mt[kk] = this.unsigned32(
          this.mt[kk + (this.M - this.N)] ^ (y >>> 1) ^ this.mag01[y & 0x1],
        );
      }
      y = this.unsigned32(
        (this.mt[this.N - 1] & this.UPPER_MASK) |
          (this.mt[0] & this.LOWER_MASK),
      );
      this.mt[this.N - 1] = this.unsigned32(
        this.mt[this.M - 1] ^ (y >>> 1) ^ this.mag01[y & 0x1],
      );
      this.mti = 0;
    }
    y = this.mt[this.mti++];
    y ^= y >>> 11;
    y ^= (y << 7) & 0x9d2c5680;
    y ^= (y << 15) & 0xefc60000;
    y ^= y >>> 18;
    return this.unsigned32(y);
  }

  public genrand_real2(): number {
    return this.genrand_int32() * (1.0 / 4294967296.0); // 2^32
  }
}

// Exporting and helper functions
const gen = new MersenneTwister19937(Date.now() % 1000000000);

export const rand = (max: number = 32768, min: number = 0): number => {
  return Math.floor(gen.genrand_real2() * (max - min) + min);
};

export const seed = (S: number): void => {
  if (typeof S !== "number") {
    throw new Error(`seed(S) must take numeric argument; is ${typeof S}`);
  }
  gen.init_genrand(S);
};

export const seed_array = (A: number[]): void => {
  if (!Array.isArray(A)) {
    throw new Error(`seed_array(A) must take array of numbers; is ${typeof A}`);
  }
  gen.init_by_array(A, A.length);
};
