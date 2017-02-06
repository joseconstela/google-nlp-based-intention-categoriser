'use strict'

var _ = require("lodash");
var lodashQuery = require("lodash-query")(_);

var phrases = require('../phrases')
var tools = require('./tools')

let Categorizer = {
  entities: [],
  lemmas: [],
  counter: {},
  match: {}
}

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
  console.log(Categorizer.counter)
}

function CategorizerAddEntities(type, subtype, entities) {
  Categorizer.entities.push({type, subtype, entities})
}

function CategorizerAddLemmas(type, subtype, lemmas) {
  Categorizer.lemmas.push({type, subtype, lemmas})
}

/**
 * Comprueba si un subtipo tiene una condición en concreto
 */
function conditions(i, property) {
  if (!i || !i.conditions) return null 

  if (property === 'lemmas') {

  }

  if (!i.conditions[property]) return null
  return i.conditions[property]
}

/**
 * Recorre todos los tipos y subtipos, comprobando .conditions y guardando las
 * coincidencias en Categorizer
 */
function categorize(phrase) {

  for(var type in phrases) {
    for(var subtype in phrases[type]) {
      
      // Entities
      let conditionalEntities = conditions(phrases[type][subtype], 'entities')
      var matchingEntities = tools.queryEntities(phrase.debug, {name: { $in: _.map(conditionalEntities, (e) => e.name) }})
      if (matchingEntities) {
        CategorizerAddEntities(type, subtype, matchingEntities)
      }

      // Entities
      let conditionalLemmas = conditions(phrases[type][subtype], 'lemmas')
      let conditionalLemmasNames = _.map(conditionalLemmas, (e) => e.name)
      var matchingLemmas = tools.queryLemmas(phrase.debug, {lemma: { $in: tools.insensitive(conditionalLemmasNames) }})
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