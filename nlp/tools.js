'use strict'

var _ = require("lodash");
var lodashQuery = require("lodash-query")(_);

module.exports.lemma = (i) => (i && i.lemma) ? i.lemma : null

module.exports.queryEntities = (i, query) => {
  if (!i || !i.entities) return null
  let m = _.query(i.entities, { $or: query })
  return m.length ? m : null
}

module.exports.queryLemmas = (i, query) => {
  if (!i || !i.tokens) return null  
  let m = _.query(i.tokens, query)
  return m.length ? m : null
}

module.exports.nonsensitive = (arr, fields) => {
  var optRegexp = []
  if (!arr || !arr.length) return optRegexp

  if (!_.size(fields)) {
    return _.map(arr, (item) => {
      return RegExp(item, 'i')
    })
  }


  arr.forEach((item) => {
    _.map(item, (value, key) => {
      if (fields.indexOf(key)+1) {
        const i = {}
          i[key] = RegExp(item[key], 'i')
        return optRegexp.push(i)
      }
      const i = {}
        i[key] = item[key]
      return optRegexp.push(i)
    } )

  })
  return optRegexp
}