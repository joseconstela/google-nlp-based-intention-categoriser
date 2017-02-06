var _ = require("lodash");
var processor = require("./processor");
var phrases = require("./phrases");

function loopPhrases(cb) {
  for(var type in phrases) {
    for(var subtype in phrases[type]) {
      _.map(phrases[type][subtype].phrases, (phrase) => {
        cb(type, subtype, phrase)
      })
    }
  }
}

// Report lack of NLP - Just for development purposes
loopPhrases((type, subtype, phrase) => {
  processor.checkNlp(type, subtype, phrase)
})

processor.process(phrases.others_.chistes.phrases[0])
return
loopPhrases((type, subtype, phrase) => {
  processor.process(phrase)
})
