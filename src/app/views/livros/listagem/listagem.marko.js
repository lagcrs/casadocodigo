// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/livros/listagem/listagem.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\"><title>Casa do Código</title></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"> <div class=\"jumbotron text-center\"><h1 class=\"display-4\">Casa do Código</h1><hr><p class=\"lead\">Sistema feito em NodeJs para controle de livros.</p></div><div class=\"d-flex justify-content-between align-items-center\"><h1> Listagem de livros </h1><a class=\"btn btn-primary\" href=\"/livros/form\" role=\"button\">Cadastrar Livro</a></div><br><table id=\"livros\" class=\"table\"><tr><td>ID</td><td>Título</td><td>Preço</td><td class=\"text-center\">Editar</td><td class=\"text-center\">Remover</td></tr>");

  var for__23 = 0;

  marko_forEach(data.livros, function(livro) {
    var keyscope__24 = "[" + ((for__23++) + "]");

    out.w("<tr id=\"livro_" +
      marko_escapeXmlAttr(livro.id) +
      "\"> <td>" +
      marko_escapeXml(livro.id) +
      "</td><td>" +
      marko_escapeXml(livro.titulo) +
      "</td><td>" +
      marko_escapeXml(livro.preco) +
      "</td><td class=\"text-center\"><a href=\"/livros/form/" +
      marko_escapeXmlAttr(livro.id) +
      "\"><i class=\"fas fa-edit\"></i></a></td> <td class=\"text-center\"><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(livro.id) +
      "\" data-type=\"remocao\" class=\"text-danger\">Remover <i class=\"fas fa-trash\"></i></a></td> </tr>");
  });

  out.w("</table> </div><script src=\"/estatico/js/remove-livro.js\">\n        </script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "36");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/livros/listagem/listagem.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
