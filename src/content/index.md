---
# The course code and name, assignment code and name,
# which formats the title and header of the page.
courseCode: COMP 1023
courseName: Introduction to Python Programming
assignmentCode: PA1
assignmentName: Mathematical Expression Evaluator

# The maintainer information shown in the sidebar of the page.
# It supports multiple maintainers.
# The note field is optional.
maintainers:
  - name: Harry Li
    email: yhliaf@connect.ust.hk
    note: Author
  - name: Desmond Tsoi
    email: desmond@ust.hk
    note: Maintainer

# The useful links for the assignment shown in the sidebar of the page.
links:
  - name: Course Homepage
    link: "https://course.cse.ust.hk/comp1023"
  - name: Zinc
    link: "http://zinc.cse.ust.hk/"
    note: >-
      To submit your work for this assignment.
  - name: CSE Request System
    link: "https://crs.cse.ust.hk/"
    note: >-
      A handout explaining the concept of formal grammars.
---

<!--
Here is a basic guide to Markdown syntax:
https://commonmark.org/help/
In addition, this template also supports the following features:
- inline and block math using $ and $$;
- alerts (https://github.com/orgs/community/discussions/16925).
-->

![](resources/IamProgrammer!.png)

###### from https://github.com/SAWARATSUKI/KawaiiLogos

## Introduction

In this assignment, you will implement a mathematical expression evaluator in
Python. The evaluator will take a string input representing a mathematical
expression and compute its value. The expressions can include basic arithmetic
operations, parentheses, and variables.

## Tokenization

The type of tokens are as follows:

- **Number**: A sequence of digits, _possibly_ containing a decimal point (e.g.,
  `3`, `4.5`).
- ...

An example of tokenization is as follows:

<!-- The code blocks are automatically with syntax highlighting! -->

```python
def tokenize(expression):
  """
  Tokenizes a mathematical expression into a list of tokens.
  """
  pass
```

## Parsing

A parse tree is a tree representation of the syntactic structure of a string of
tokens.

### Example of a Parse Tree

```
  +
  / \
3   *
    / \
  4   5
```

## Evaluation

## Tasks

## Testing

## Submission and Deadline

## Changelog

## FAQ
