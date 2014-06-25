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
  var len = arr.length | 0
    , s = null

  for (var i = len - 1; i >= 0; i--)
    s = new List(arr[i], s) 

  return s
}

var List = require('./list')
