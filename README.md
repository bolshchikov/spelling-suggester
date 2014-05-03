## Spelling Suggester



### How to run
This project in written on node (>= 0.10.x). Firstly, run

    npm install

so that npm would install all dependencies of the project, and then run

    node suggester.js

### Dependencies
* `q` for promises
* `csv` for parsing csv files
* `mocha` and `chai` for tests

### Notes
The code base consists of the following files:

     - suggester.js
     - modules
      |- diff.js
      |- distance.js
      |- parser.js

File `suggester.js` is the main launch file. The `parser.js` file reads both csv files
are return two data structures: array with queries and map and words and their frequencies.

File `diff.js` is the diff part of google's [diff-match-patch](https://code.google.com/p/google-diff-match-patch/)
library that implements Myer's diff algorithm and Levenshtein distance.

The overall complexity of the solution is `O(NDM^2)`, there

    N - the sum of lengths of query word (A) and a word from the dictionary (B)
    D - the minimum amount of changes between A and B
    M - the length of the dictionary

Thus,

1. The increase of the dictionary up to 1 million words would have a significant impact on the
performance since it's in the power of 2.
2. The performance change of length of 3 would be insignificant.
3. The longer query would increase the D factor, the harder it would be to calculate the distance.
However, the performance would be better than in the first case.

The possible solution is to separate the retrieving and parsing processes by creating work index in
advance, thus minimizing the time of the spelling suggester.


