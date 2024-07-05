//You can add new entries, but for now only two sublevels are expected.
const translationDictionary = {
  "pt-br": {
    "time": {
      "second": "segundo",
      "seconds": "segundos",
      "minute": "minuto",
      "minutes": "minutos",
      "hour": "hora",
      "hours": "horas",
      "day": "dia",
      "days": "dias"
    }
  },
  "en": {
    "time": {
      "second": "second",
      "seconds": "seconds",
      "minute": "minute",
      "minutes": "minutes",
      "hour": "hour",
      "hours": "hours",
      "day": "day",
      "days": "days"
    }
  }
};

//A simple localization helper to vanilla javascript
window.i18n = function (key) {
  const currentLanguage = document.documentElement.lang;
  const keywords = key.split(".");
  return translationDictionary[currentLanguage][keywords[0]][keywords[1]];
};