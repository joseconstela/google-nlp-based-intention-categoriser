module.exports = [{
    input: "Recuérdame beber agua",
    "debug": {
      "sentences": [{
        "text": {
          "content": "Recuérdame beber agua",
          "beginOffset": -1
        },
        "sentiment": {
          "magnitude": 0.2,
          "score": 0.2
        }
      }],
      "tokens": [{
          "text": {
            "content": "Recuérda",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "IMPERFECTIVE",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "IMPERATIVE",
            "number": "SINGULAR",
            "person": "SECOND",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "ACTIVE"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "ROOT"
          },
          "lemma": "Recuérdar"
        },
        {
          "text": {
            "content": "me",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "PRON",
            "aspect": "ASPECT_UNKNOWN",
            "case": "DATIVE",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "FIRST",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "IOBJ"
          },
          "lemma": "yo"
        },
        {
          "text": {
            "content": "beber",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "IMPERFECTIVE",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "ACTIVE"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "XCOMP"
          },
          "lemma": "beber"
        },
        {
          "text": {
            "content": "agua",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 2,
            "label": "DOBJ"
          },
          "lemma": "agua"
        }
      ],
      "entities": [{
        "name": "agua",
        "type": "OTHER",
        "metadata": {},
        "salience": 0,
        "mentions": [{
          "text": {
            "content": "agua",
            "beginOffset": -1
          },
          "type": "COMMON"
        }]
      }],
      "documentSentiment": {
        "magnitude": 0.2,
        "score": 0.2
      },
      "language": "es"
    }
  },
  {
    input: "Recuérdame cita médica el lunes a las 4 de la tarde",
    "debug": {
      "sentences": [{
        "text": {
          "content": "Recuérdame cita médica el lunes a las 4 de la tarde",
          "beginOffset": -1
        },
        "sentiment": {
          "magnitude": 0,
          "score": 0
        }
      }],
      "tokens": [{
          "text": {
            "content": "Recuérda",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "IMPERFECTIVE",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "IMPERATIVE",
            "number": "SINGULAR",
            "person": "SECOND",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "ACTIVE"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "ROOT"
          },
          "lemma": "Recuérdar"
        },
        {
          "text": {
            "content": "me",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "PRON",
            "aspect": "ASPECT_UNKNOWN",
            "case": "DATIVE",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "FIRST",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "IOBJ"
          },
          "lemma": "yo"
        },
        {
          "text": {
            "content": "cita",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "DOBJ"
          },
          "lemma": "cita"
        },
        {
          "text": {
            "content": "médica",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADJ",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 2,
            "label": "AMOD"
          },
          "lemma": "médico"
        },
        {
          "text": {
            "content": "el",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "DET",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 5,
            "label": "DET"
          },
          "lemma": "el"
        },
        {
          "text": {
            "content": "lunes",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "TMOD"
          },
          "lemma": "lunes"
        },
        {
          "text": {
            "content": "a",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADP",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 5,
            "label": "PREP"
          },
          "lemma": "a"
        },
        {
          "text": {
            "content": "las",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "DET",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "PLURAL",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 8,
            "label": "DET"
          },
          "lemma": "el"
        },
        {
          "text": {
            "content": "4",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NUM",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "POBJ"
          },
          "lemma": "4"
        },
        {
          "text": {
            "content": "de",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADP",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 8,
            "label": "PREP"
          },
          "lemma": "de"
        },
        {
          "text": {
            "content": "la",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "DET",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 11,
            "label": "DET"
          },
          "lemma": "el"
        },
        {
          "text": {
            "content": "tarde",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 9,
            "label": "POBJ"
          },
          "lemma": "tarde"
        }
      ],
      "entities": [{
        "name": "cita médica",
        "type": "EVENT",
        "metadata": {},
        "salience": 0,
        "mentions": [{
          "text": {
            "content": "cita médica",
            "beginOffset": -1
          },
          "type": "COMMON"
        }]
      }],
      "documentSentiment": {
        "magnitude": 0,
        "score": 0
      },
      "language": "es"
    }
  },
  {
    input: "Recuérdame cita médica el lunes a las 4 pm",
    "debug": {
      "sentences": [{
        "text": {
          "content": "Recuérdame cita médica el lunes a las 4 pm",
          "beginOffset": -1
        },
        "sentiment": {
          "magnitude": 0,
          "score": 0
        }
      }],
      "tokens": [{
          "text": {
            "content": "Recuérda",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "IMPERFECTIVE",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "IMPERATIVE",
            "number": "SINGULAR",
            "person": "SECOND",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "ACTIVE"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "ROOT"
          },
          "lemma": "Recuérdar"
        },
        {
          "text": {
            "content": "me",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "PRON",
            "aspect": "ASPECT_UNKNOWN",
            "case": "DATIVE",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "FIRST",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "IOBJ"
          },
          "lemma": "yo"
        },
        {
          "text": {
            "content": "cita",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "DOBJ"
          },
          "lemma": "cita"
        },
        {
          "text": {
            "content": "médica",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADJ",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 2,
            "label": "AMOD"
          },
          "lemma": "médico"
        },
        {
          "text": {
            "content": "el",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "DET",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 5,
            "label": "DET"
          },
          "lemma": "el"
        },
        {
          "text": {
            "content": "lunes",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "TMOD"
          },
          "lemma": "lunes"
        },
        {
          "text": {
            "content": "a",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADP",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 5,
            "label": "PREP"
          },
          "lemma": "a"
        },
        {
          "text": {
            "content": "las",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "DET",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "PLURAL",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 8,
            "label": "DET"
          },
          "lemma": "el"
        },
        {
          "text": {
            "content": "4",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NUM",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "POBJ"
          },
          "lemma": "4"
        },
        {
          "text": {
            "content": "pm",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "X",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 8,
            "label": "ADVMOD"
          },
          "lemma": "pm"
        }
      ],
      "entities": [{
        "name": "cita médica",
        "type": "EVENT",
        "metadata": {},
        "salience": 0,
        "mentions": [{
          "text": {
            "content": "cita médica",
            "beginOffset": -1
          },
          "type": "COMMON"
        }]
      }],
      "documentSentiment": {
        "magnitude": 0,
        "score": 0
      },
      "language": "es"
    }
  },
  {
    input: "Recuérdame que haga los deberes mañana a la mañana",
    "debug": {
      "sentences": [{
        "text": {
          "content": "Recuérdame que haga los deberes mañana a la mañana",
          "beginOffset": -1
        },
        "sentiment": {
          "magnitude": 0.2,
          "score": 0.2
        }
      }],
      "tokens": [{
          "text": {
            "content": "Recuérda",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "IMPERFECTIVE",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "IMPERATIVE",
            "number": "SINGULAR",
            "person": "SECOND",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "ACTIVE"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "ROOT"
          },
          "lemma": "Recuérdar"
        },
        {
          "text": {
            "content": "me",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "PRON",
            "aspect": "ASPECT_UNKNOWN",
            "case": "DATIVE",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "FIRST",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "IOBJ"
          },
          "lemma": "yo"
        },
        {
          "text": {
            "content": "que",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "PUNCT",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "MARK"
          },
          "lemma": "que"
        },
        {
          "text": {
            "content": "haga",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "IMPERFECTIVE",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "SUBJUNCTIVE",
            "number": "SINGULAR",
            "person": "THIRD",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "PRESENT",
            "voice": "ACTIVE"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "CCOMP"
          },
          "lemma": "hacer"
        },
        {
          "text": {
            "content": "los",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "DET",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "PLURAL",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 5,
            "label": "DET"
          },
          "lemma": "el"
        },
        {
          "text": {
            "content": "deberes",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "PLURAL",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "DOBJ"
          },
          "lemma": "deber"
        },
        {
          "text": {
            "content": "mañana",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADV",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "ADVMOD"
          },
          "lemma": "mañana"
        },
        {
          "text": {
            "content": "a",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADP",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "PREP"
          },
          "lemma": "a"
        },
        {
          "text": {
            "content": "la",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "DET",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 9,
            "label": "DET"
          },
          "lemma": "el"
        },
        {
          "text": {
            "content": "mañana",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 7,
            "label": "POBJ"
          },
          "lemma": "mañana"
        }
      ],
      "entities": [{
        "name": "deberes",
        "type": "OTHER",
        "metadata": {},
        "salience": 0,
        "mentions": [{
          "text": {
            "content": "deberes",
            "beginOffset": -1
          },
          "type": "COMMON"
        }]
      }],
      "documentSentiment": {
        "magnitude": 0.2,
        "score": 0.2
      },
      "language": "es"
    }
  },
  {
    input: "Recuérdame que vaya al médico dentro de un mes",
    "debug": {
      "sentences": [{
        "text": {
          "content": "Recuérdame que vaya al médico dentro de un mes",
          "beginOffset": -1
        },
        "sentiment": {
          "magnitude": 0,
          "score": 0
        }
      }],
      "tokens": [{
          "text": {
            "content": "Recuérda",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "IMPERFECTIVE",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "IMPERATIVE",
            "number": "SINGULAR",
            "person": "SECOND",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "ACTIVE"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "ROOT"
          },
          "lemma": "Recuérdar"
        },
        {
          "text": {
            "content": "me",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "PRON",
            "aspect": "ASPECT_UNKNOWN",
            "case": "DATIVE",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "FIRST",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "IOBJ"
          },
          "lemma": "yo"
        },
        {
          "text": {
            "content": "que",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADP",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "MARK"
          },
          "lemma": "que"
        },
        {
          "text": {
            "content": "vaya",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "IMPERFECTIVE",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "SUBJUNCTIVE",
            "number": "SINGULAR",
            "person": "THIRD",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "PRESENT",
            "voice": "ACTIVE"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "CCOMP"
          },
          "lemma": "ir"
        },
        {
          "text": {
            "content": "al",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADP",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "PREP"
          },
          "lemma": "a"
        },
        {
          "text": {
            "content": "médico",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 4,
            "label": "POBJ"
          },
          "lemma": "médico"
        },
        {
          "text": {
            "content": "dentro",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADV",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "ADVMOD"
          },
          "lemma": "dentro"
        },
        {
          "text": {
            "content": "de",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADP",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "PREP"
          },
          "lemma": "de"
        },
        {
          "text": {
            "content": "un",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "DET",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 9,
            "label": "DET"
          },
          "lemma": "un"
        },
        {
          "text": {
            "content": "mes",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 7,
            "label": "POBJ"
          },
          "lemma": "mes"
        }
      ],
      "entities": [{
        "name": "médico",
        "type": "PERSON",
        "metadata": {},
        "salience": 0,
        "mentions": [{
          "text": {
            "content": "médico",
            "beginOffset": -1
          },
          "type": "COMMON"
        }]
      }],
      "documentSentiment": {
        "magnitude": 0,
        "score": 0
      },
      "language": "es"
    }
  },
  {
    'input': "Recuérdame que beba agua dentro de 5 minutos",
    "debug": {
      "sentences": [{
        "text": {
          "content": "Recuérdame que beba agua dentro de 5 minutos",
          "beginOffset": -1
        },
        "sentiment": {
          "magnitude": 0.5,
          "score": 0.5
        }
      }],
      "tokens": [{
          "text": {
            "content": "Recuérda",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "IMPERFECTIVE",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "IMPERATIVE",
            "number": "SINGULAR",
            "person": "SECOND",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "ACTIVE"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "ROOT"
          },
          "lemma": "Recuérdar"
        },
        {
          "text": {
            "content": "me",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "PRON",
            "aspect": "ASPECT_UNKNOWN",
            "case": "DATIVE",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "FIRST",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "IOBJ"
          },
          "lemma": "yo"
        },
        {
          "text": {
            "content": "que",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "DET",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "NSUBJ"
          },
          "lemma": "que"
        },
        {
          "text": {
            "content": "beba",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "VERB",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "SUBJUNCTIVE",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 0,
            "label": "CCOMP"
          },
          "lemma": "beber"
        },
        {
          "text": {
            "content": "agua",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "FEMININE",
            "mood": "MOOD_UNKNOWN",
            "number": "SINGULAR",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "DOBJ"
          },
          "lemma": "agua"
        },
        {
          "text": {
            "content": "dentro",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADV",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 3,
            "label": "ADVMOD"
          },
          "lemma": "dentro"
        },
        {
          "text": {
            "content": "de",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "ADP",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "GENDER_UNKNOWN",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 5,
            "label": "PREP"
          },
          "lemma": "de"
        },
        {
          "text": {
            "content": "5",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NUM",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "NUMBER_UNKNOWN",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 8,
            "label": "NUM"
          },
          "lemma": "5"
        },
        {
          "text": {
            "content": "minutos",
            "beginOffset": -1
          },
          "partOfSpeech": {
            "tag": "NOUN",
            "aspect": "ASPECT_UNKNOWN",
            "case": "CASE_UNKNOWN",
            "form": "FORM_UNKNOWN",
            "gender": "MASCULINE",
            "mood": "MOOD_UNKNOWN",
            "number": "PLURAL",
            "person": "PERSON_UNKNOWN",
            "proper": "NOT_PROPER",
            "reciprocity": "RECIPROCITY_UNKNOWN",
            "tense": "TENSE_UNKNOWN",
            "voice": "VOICE_UNKNOWN"
          },
          "dependencyEdge": {
            "headTokenIndex": 6,
            "label": "POBJ"
          },
          "lemma": "minuto"
        }
      ],
      "entities": [{
        "name": "agua",
        "type": "OTHER",
        "metadata": {},
        "salience": 0,
        "mentions": [{
          "text": {
            "content": "agua",
            "beginOffset": -1
          },
          "type": "COMMON"
        }]
      }],
      "documentSentiment": {
        "magnitude": 0.5,
        "score": 0.5
      },
      "language": "es"
    }
  }
]