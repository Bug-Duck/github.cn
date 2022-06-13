function PluginTagRender() {
    TopMenuRender();
}

const TopMenuRender = () => {
    let ele;
    let CouldClassName = [
        "js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade",
        "js-selected-navigation-item Header-link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade",
        "js-selected-navigation-item selected Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade",

    ];
    CouldClassName.forEach(className => {
        ele = document.querySelectorAll(`a[class=\"${className}\"]`);
        ele.forEach(i => {
            let hrefValue = i.getAttribute("href");
            if (hrefValue === "/pulls") {
                i.innerHTML = "合并请求";
            } else if (hrefValue === "/issues") {
                i.innerHTML = "问题";
            } else if (hrefValue === "/marketplace") {
                i.innerHTML = "广场";
            } else if (hrefValue === "/explore") {
                i.innerHTML = "I don't kown"
            }
        }
    );
})
    
}