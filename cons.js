'use strict';
module.exports = Cons

function Cons(head, tail) {
  if (List.instanceOf(tail))
    return new List(head, tail)
  this._head = head
  this._tail = tail
}

Cons.prototype.proper = false
Cons.instanceOf = function(cons) {
  return cons === null
      || cons instanceof Cons
}

Cons.prototype.head = function() { return this._head }
Cons.prototype.tail = function() { return this._tail }

Cons.from = function(arr) {
  if (Cons.instanceOf(arr))
    return arr

  return Seq.from(arr)
}

var List = require('./list')
  , Seq = require('./seq')
