'use strict';
module.exports = List
var inherits = require('./inherits')
  , Cons = require('./')

inherits(List, Cons)
function List(head, tail) {
  this._head = head
  this._tail = tail

  if (!List.instanceOf(tail))
    throw new TypeError('tail of a list must be a list')
}

List.prototype.proper = true
List.instanceOf = function(cons) {
  return cons === null
      || cons instanceof List
}

List.from = Cons.from

List.prototype.force = function() {}
