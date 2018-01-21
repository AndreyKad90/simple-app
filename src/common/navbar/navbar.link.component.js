export default {
    template($element, $attrs) {
        const template = `
<li class="nav-item">
    <a class="nav-link active"
       ui-sref="${$attrs.to}" 
       ui-sref-active="active">
        ${$element.html()}
    </a>
</li>`;
        return template;
    }
};