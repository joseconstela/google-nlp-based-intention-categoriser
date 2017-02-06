'use strict'

var util = require('util')

var nlp = require('./nlp')
var colors = require('colors')

/**
 * Given a phrase, check if there's Google NLP attached to it
 */
exports.checkNlp = (type, subtype, phrase) => {
  //if (!phrase.debug) console.log(`${'x NOT NLP'.red} \t ${type}\t${subtype} \t ${phrase.input}`)
}

/**
 * Process a phrase. Returns its type and subtype
 */
exports.process = (phrase) => {
  if (!phrase.debug) return

  // Determinar a qué tipo y subtipo se refiere
  let categorizerResult = nlp.categorizer.categorize(phrase)

  console.log(
    util.inspect(categorizerResult.lemmas, false, null)
  )
  
}