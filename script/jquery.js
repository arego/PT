function $(tagName) {
    return document.createElement(tagName);
}
HTMLElement.prototype.append = function (child) {
    this.appendChild(child);
    return this;
}
HTMLElement.prototype.attr = function (attrName, attrValue) {
    this.setAttribute(attrName, attrValue);
    return this;
}