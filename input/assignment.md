# Spelling Suggester #

The goal of the assignment is to implement a spelling suggester. As a sample use
case for the suggester, if a user entered the query "impresive", the suggester
could suggest "impressive".

We have attached a list of sample misspelled queries. We have also attached a
subset of the words that are included in our dictionary, along with the
frequency of how often these words are searched.

For this spelling suggester, we would like for you to use two factors to suggest words:

* Edit distance - The number of additions, deletions, and changes needed to
  change one string to another string.

* Word frequency - A frequency count of how often a word has historically been
  searched by users.

The data for word frequency has been provided. The edit distance between the
misspelled query and the words in the dictionary will need to be calculated.

Your code should be executable from the command line, and write suggestions
for each word in misspelled_queries.csv to a file "suggestions.txt". Suggestions
for a misspelled query should only include words from word_frequency.csv that
have an edit distance of 1 or 2 and should be sorted by word frequency.

Each line of output should be in the following format: `* <misspelled query>: <array of suggestions>`

Example "suggestions.txt" (not drawn from provided data):

    * rerries: ['retries', 'berries', 'ferries', 'aeries']
    * vaps: ['van', 'vans', 'tap', 'taps', 'vamp', 'cap', 'caps', 'lap', 'laps', 'map', 'maps', 'nap', 'naps', 'vapid']
    * ...

A few notes about the assignment:

* Please write the code in Javascript, CoffeeScript, or Python.

* Not all queries will have suggestions.

* Producing great suggestions is the most important priority. The faster the
  code runs, the better.

## Deliverables

* Source code.

* Unit tests.

* A README file that explains how to run the program and includes any attributions
for approaches that you use that are based on other people's code.

* After creating the spelling suggester, include your thoughts on the following
questions:

  1. How would the code perform if the size of the dictionary were 1 million words?
  2. How would the code perform with an edit distance of 3?
  3. How does the code perform on long queries versus short queries and why?
