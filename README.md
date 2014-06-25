# jscons

  the familiar lisp cons in JS, with some Clojuretastic extras.
  an experiment for use with `seq-fns`.

## Installation

    npm install jscons

## var Cons = require('jscons')

  a `Cons` is either `instanceof Cons` or `null`.

### new Cons(head, tail) → Cons

  Constructs a `Cons` from a head and tail. Ye olde `(cons head tail)`.
  If the tail is a `List`, this will be a `List` too.

### Cons.from(arr) → List

  Constructs a `List` from an array-like.

### Cons.instanceOf(cons) → Boolean

  Returns a boolean indicating whether `cons` is a `Cons`.

### cons.head() → value

  Returns the head of the cons.

### cons.tail() → value

  Returns the tail of the cons.

## var List = require('cons/list')

  a `List` is either a cons of a value and another `List`, or `null`.
  by definition, a `List` is a `Cons`.

### new List(head, tail)

  Constructs a `List` from a head and another list.
  Ye olde `(cons head tail)`, but throws if the tail isn't a `List`.

### List.instanceOf(list)

  Returns a boolean indicating whether `list` is a `List`.

### List.from(arr) → List

  Constructs a `List` from an array-like.

### List.force()

  Does nothing for a list.

## var Seq = require('cons/seq')

  a `Seq` is either a cons of a value and another `List`, or `null`.
  by definition, a `Seq` is a `List`, though a lazy one.

  The tail is constructed the first time it is asked for, by calling the `tailFn`.

### new Seq(head, tailFn)

  Constructs a `Seq` from a head and a tail thunk.

### Seq.from(arr)

  Constructs a `Seq` from an array-like. Because a `Seq` is lazy, the elements are only taken out of the array when asked for.

### seq.force()

  Forces the entire `Seq` to be constructed.

