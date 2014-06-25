'use strict';
module.exports = Seq
var inherits = require('./inherits')
  , List = require('./list')

inherits(Seq, List)
function Seq(head, tail) {
  if (typeof tail != 'function')
    throw new TypeError('tail of a seq must be a function')
  this._head = head
  this._tailFn = tail
}

Seq.prototype.tail = function() {
  if (this._tailFn !== null) {
    if (!List.instanceOf(this._tail = this._tailFn.call(null)))
      throw new TypeError('tail of a seq must be a list')
    this._tailFn = null
  }
  return this._tail
}

Seq.from = function(arr) {
  if (List.instanceOf(arr))
    return arr

  return from(arr, 0)()
}

function from(arr, i) {
  return function() {
    var len = arr.length | 0
    i |= 0

    if (i >= len)
      return null

    return new Seq(arr[i], from(arr, i + 1))
  }
}

Seq.prototype.force = function() {
  var head = this
  while (head !== null)
    head = head.tail()
}
