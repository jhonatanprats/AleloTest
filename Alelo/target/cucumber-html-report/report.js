$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/TestCorreios/Alelo/Correios.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: jhonatanprates@hotmail.com"
    }
  ],
  "line": 2,
  "name": "Pesquisar CEP no site dos Correios",
  "description": "Eu quero realizar a pesquisa de CEP e printar ele em tela",
  "id": "pesquisar-cep-no-site-dos-correios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Acessar e Printar pesquisa do CEP no site dos correios",
  "description": "",
  "id": "pesquisar-cep-no-site-dos-correios;acessar-e-printar-pesquisa-do-cep-no-site-dos-correios",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "que eu acesse o site dos correios",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "eu realizar a pesquisa do \"\u003ccep\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "irei printar o valor retornado pela pesquisa",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "pesquisar-cep-no-site-dos-correios;acessar-e-printar-pesquisa-do-cep-no-site-dos-correios;",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 11,
      "id": "pesquisar-cep-no-site-dos-correios;acessar-e-printar-pesquisa-do-cep-no-site-dos-correios;;1"
    },
    {
      "cells": [
        "03161080"
      ],
      "line": 12,
      "id": "pesquisar-cep-no-site-dos-correios;acessar-e-printar-pesquisa-do-cep-no-site-dos-correios;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12159396500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Acessar e Printar pesquisa do CEP no site dos correios",
  "description": "",
  "id": "pesquisar-cep-no-site-dos-correios;acessar-e-printar-pesquisa-do-cep-no-site-dos-correios;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "que eu acesse o site dos correios",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "eu realizar a pesquisa do \"03161080\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "irei printar o valor retornado pela pesquisa",
  "keyword": "Then "
});
formatter.match({
  "location": "CorreiosSteps.que_eu_acesse_o_site_dos_correios()"
});
formatter.result({
  "duration": 21827144800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03161080",
      "offset": 27
    }
  ],
  "location": "CorreiosSteps.eu_realizar_a_pesquisa_do(String)"
});
