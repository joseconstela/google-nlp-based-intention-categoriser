# google-nlp-based-intention-categoriser
NodeJS microservice to detect user's intent based on Google's NLP analysis

Please note this is a spare time project, not suitable for production environments but for learning ones :)

---

Given a phrase, its Google's NLP analysis (syntax, entities and sentiment), and custom conditions, returns its intention analysis:

```
{
  "input": "Quiero escuchar música clásica",
  "output": {
    "entities": [
      {
        "type": "other",
        "subtype": "multimedia",
        "entities": [
          "música clásica"
        ]
      }
    ],
    "lemmas": [
      {
        "type": "other",
        "subtype": "multimedia",
        "lemmas": [
          "escuchar",
          "m√∫sica"
        ]
      }
    ],
    "counter": {
      "other": {
        "multimedia": 2.2
      }
    },
    "points": [
      {
        "type": "other",
        "subType": "multimedia",
        "value": 2.2
      }
    ],
    "match": {
      "type": "other",
      "subType": "multimedia",
      "value": 2.2
    }
  }
}
```
