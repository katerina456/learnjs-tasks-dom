console.log(document)

/* Document, по историческим причинам часто наследуется HTMLDocument 
(хотя последняя спецификация этого не навязывает) – это документ в целом. 
Глобальный объект document принадлежит именно к этому классу. Он служит точкой входа в DOM.
*/

console.log(HTMLDocument.prototype.constructor.name); // HTMLDocument
console.log(HTMLDocument.prototype.__proto__.constructor.name); // Document
console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
