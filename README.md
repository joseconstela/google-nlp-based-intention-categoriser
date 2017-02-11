# google-nlp-based-intention-categoriser
NodeJS microservice to detect user's intent based on Google's NLP analysis

Please note this is a spare time project and has been made for learning and curiosity purposes. Not suitable for production environments but for learning ones :)

---

## Goal

Given a phrase, its Google's NLP analysis (syntax, entities and sentiment), and custom conditions, returns its intention analysis:

## Example

### Input

```
"Quiero escuchar música clásica"
```

### Conditions

_Just the multimedia intent, to keep README tidy and clean_
```
conditions = {
  entities: [
    {
      name: "música rock"
    },
    {
      name: "música clásica"
    },
    {
      type: "WORK_OF_ART"
    }
  ],
  lemmas: [
    {
      name: "escuchar"
    },
    {
      name: "música"
    }
  ]
}
```

_Entities names and lemmas names are case-insensitive_

### Result

```
{
  "input": "Quiero escuchar música clásica",  // I want to listen classical music
  "output": {
    "entities": [                             // List of matched entities
      {
        "type": "other",
        "subtype": "multimedia",
        "entities": [
          "música clásica"                    // classical music
        ]
      }
    ],
    "lemmas": [                               // List of matched tokens lemmas
      {
        "type": "other",
        "subtype": "multimedia",
        "lemmas": [
          "escuchar",                         // listen
          "música"                            // music
        ]
      }
    ],
    "counter": {                              // Points (as k=>v)
      "other": {
        "multimedia": 2.2                     // Match score
      }
    },
    "points": [                               // Same as counter, but array of objects and sorted by value
      {
        "type": "other",
        "subType": "multimedia",
        "value": 2.2                          // Match score
      }
    ],
    "match": {                                // Just the higest match
      "type": "other",
      "subType": "multimedia",
      "value": 2.2
    }
  }
}
```
