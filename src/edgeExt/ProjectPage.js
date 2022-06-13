function ProjectPageRender () {
    TopItemTabRender();
    RightItemTabRender();
}

const TopItemTabRender = () => {
    let ele;
    ele = document.querySelectorAll("span[data-content=\"Code\"]");
    ele.forEach(i => {i.innerHTML = "代码"});
    ele = document.querySelectorAll("span[data-content=\"Issues\"]");
    ele.forEach(i => {i.innerHTML = "问题"});
    ele = document.querySelectorAll("span[data-content=\"Pull requests\"]");
    ele.forEach(i => {i.innerHTML = "合并请求"});
    ele = document.querySelectorAll("span[data-content=\"Actions\"]");
    ele.forEach(i => {i.innerHTML = "活动"});
    ele = document.querySelectorAll("span[data-content=\"Projects\"]");
    ele.forEach(i => {i.innerHTML = "项目"});
    // 这个选项其实就没必要翻译了哈哈
    // ele = document.querySelectorAll("span[data-content=\"WiKi\"]");
    // ele.forEach(i => {i.innerHTML = "百科"});
    ele = document.querySelectorAll("span[data-content=\"Security\"]");
    ele.forEach(i => {i.innerHTML = "安全"});
    ele = document.querySelectorAll("span[data-content=\"Insights\"]");
    ele.forEach(i => {i.innerHTML = "统计"});
    ele = document.querySelectorAll("span[data-content=\"Settings\"]");
    ele.forEach(i => {i.innerHTML = "设置"});
    // ele = document.querySelectorAll("span[data-content=\"\"]");
    // ele.forEach(i => {i.innerHTML = ""});
    
}

const RightItemTabRender = () => {
    let ele;
    ele = document.querySelectorAll("a[class=\"Link--muted\"]");
    ele.forEach(i => {
        if (i.getAttribute("href") === "#readme") { // readme翻译
            const icoString = i.innerHTML.replace("Readme","");
            i.innerHTML = `${icoString}说明文件`;
        } else if (/\/(.+\/)+LICENSE/.test(i.getAttribute("href"))) { //开源许可证翻译
            const icoString = i.innerHTML.replace(/.+ license/,"");
            i.innerHTML = `${icoString}${/.+ license/.exec(i.innerHTML)[0].replace(/license/,"")}开源许可证`;
        };
    });
    ele = document.querySelectorAll("a[data-view-component=\"true\"]");
    ele.forEach(i => {
        if (/\/(.+\/)+releases/.test(i.getAttribute("href"))) { //发行版翻译
            i.innerHTML = "发行版";
        } else if (/\/(.+\/)+packages.+/.test(i.getAttribute("href"))) {
            i.innerHTML = "包";
        } else if (/\/(.+\/)+contributors/.test(i.getAttribute("href"))) {
            i.innerHTML = i.innerHTML.replace("Contributors","贡献者");
        } else if (/\/(.+\/)+deployments/.test(i.getAttribute("href"))) {
            i.innerHTML = i.innerHTML.replace("Environments ","环境");
        } 
    })

    ele = document.querySelectorAll("h2[class=\"mb-3 h4\"]");
    ele.forEach(i => {i.innerHTML = "关于"});

    ele = document.querySelectorAll("div[class=\"f4 my-3 color-fg-muted text-italic\"]");
    ele.forEach(i => {
        console.log(i);
        const http = new XMLHttpRequest();
        const text = (http.open("GET",`http://translate.google.cn/translate_a/single?client=at&sl=en&tl=zh-CN&dt=t&q=${i.innerHTML}`,true))[0][0];
        i.innerHTML = text
    })

}