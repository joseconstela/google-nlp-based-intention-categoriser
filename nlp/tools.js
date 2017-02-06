'use strict'

var _ = require("lodash");
var lodashQuery = require("lodash-query")(_);

module.exports.lemma = (i) => (i && i.lemma) ? i.lemma : null

module.exports.queryEntities = (i, query) => {
  if (!i || !i.entities) return null
  let m = _.query(i.entities, query)
  return m.length ? m : null
}

module.exports.queryLemmas = (i, query) => {
  if (!i || !i.tokens) return null
  let m = _.query(i.tokens, query)
  return m.length ? m : null
}

module.exports.insensitive = (arr) => {
  var optRegexp = []
  arr.forEach((opt) => {
    optRegexp.push( new RegExp(opt, 'i') )
  })
  
  return optRegexp
}