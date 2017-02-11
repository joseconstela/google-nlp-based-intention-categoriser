'use strict'

var _ = require("lodash");
var lodashQuery = require("lodash-query")(_);

var phrases = require('../phrases')
var tools = require('./tools')

let Categorizer

function CategorizerBuildCount() {

  let assign = (type, subtype, points) => {
    if (!!Categorizer.counter[type]) {
      if (!!Categorizer.counter[type][subtype]) {
        Categorizer.counter[type][subtype] = 
          Categorizer.counter[type][subtype] + points
      }
      else {
        Categorizer.counter[type][subtype] = 1
      }
    }
    else {
      Categorizer.counter[type] = {}
      Categorizer.counter[type][subtype] = points
    }
  }

  _.map(Categorizer.entities, (c) => {
    assign(c.type, c.subtype, 1.2)
  })
  _.map(Categorizer.lemmas, (c) => {
    assign(c.type, c.subtype, 1)
  })

  Categorizer.points = _
    .chain(Categorizer.counter)
    .map((subTypes, type) => {
      if (_.size(subTypes)===1) {
        return _.map(subTypes, (value, name) => {
          return {type: type, subType: name, value}
        })[0]
      }
      var max = Object
        .keys(subTypes)
        .reduce((a, b) => { 
          return subTypes[a] > subTypes[b] ? 
            {value: subTypes[a], name: a} :
            {value: subTypes[b], name: b}
        });
      return {type: type, subType: max.name, value: max.value}
    })
    .sortBy('value')
    .reverse()
    .value()

  Categorizer.match = Categorizer.points ? Categorizer.points[0] : {}
}

function CategorizerAddEntities(type, subtype, entities) {
  Categorizer.entities.push({type, subtype, entities: _.map(entities, 'name')})
}

function CategorizerAddLemmas(type, subtype, lemmas) {
  Categorizer.lemmas.push({type, subtype, lemmas: _.map(lemmas, 'lemma')})
}

/**
 * Comprueba si un subtipo tiene una condición en concreto
 */
function conditions(i, property) {
  if (!i || !i.conditions) return null 

  if (!i.conditions[property]) return null
  return i.conditions[property]
}

/**
 * Recorre todos los tipos y subtipos, comprobando .conditions y guardando las
 * coincidencias en Categorizer
 */
function categorize(phrase) {

  Categorizer = {
    entities: [],
    lemmas: [],
    counter: {},
    points: [],
    match: {}
  }

  for(var type in phrases) {
    for(var subtype in phrases[type]) {

      // Entities
      let conditionalEntities = conditions(phrases[type][subtype], 'entities')
          conditionalEntities = tools.nonsensitive(conditionalEntities, ['name'])
      var matchingEntities = tools.queryEntities(phrase.debug, conditionalEntities)
      if (matchingEntities) {
        CategorizerAddEntities(type, subtype, matchingEntities)
      }

      // Lemmas
      let conditionalLemmas = conditions(phrases[type][subtype], 'lemmas')
      let conditionalLemmasNames = _.map(conditionalLemmas, (e) => e.name)
      var matchingLemmas = tools.queryLemmas(phrase.debug, {lemma: { $in: tools.nonsensitive(conditionalLemmasNames) }})
      if (matchingLemmas) {
        CategorizerAddLemmas(type, subtype, matchingLemmas)
      }

    }
  }

  // Añadir los resultados de análisis a Categorizer
  CategorizerBuildCount()

  // Devolver Categorizer
  return Categorizer

}

module.exports = { categorize }