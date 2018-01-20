export default {
    template($element, $attrs) {
        return `<a ui-sref="${$attrs.to}" ui-sref-active="active">${$element.html()}</a>`;
    }
}