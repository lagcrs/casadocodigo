// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/livros/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\"><title>Casa do Código</title></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"> <div class=\"jumbotron d-flex justify-content-between align-items-center\"><h2>Formulário de Livros</h2> <a class=\"btn btn-primary\" href=\"/livros\" role=\"button\"><i class=\"fas fa-arrow-left\"></i> Voltar</a> </div><form action=\"/livros\" method=\"post\" class=\"form-group\">");

  if (data.livro.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.livro.id) +
      "\" class=\"form-control\"></div>");
  }

  out.w("<div><label for=\"titulo\">Título</label><input type=\"text\" id=\"titulo\" name=\"titulo\" placeholder=\"Casa do Código...\" value=\"" +
    marko_escapeXmlAttr(data.livro.titulo) +
    "\" class=\"form-control\"><br></div><div><label for=\"preco\">Preço</label><input type=\"text\" id=\"preco\" name=\"preco\" placeholder=\"150.25\" value=\"" +
    marko_escapeXmlAttr(data.livro.preco) +
    "\" class=\"form-control\"><br></div><div><label for=\"descricao\">Descrição</label><textarea cols=\"20\" rows=\"10\" id=\"descricao\" name=\"descricao\" placeholder=\"Fale mais sobre o livro...\" class=\"form-control\">" +
    marko_escapeXml(data.livro.descricao) +
    "</textarea><br></div><input type=\"submit\" value=\"Salvar\" class=\"btn btn-success\"></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "29");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/livros/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
