function e(e, n) {
    const o = document.createElement("a");
    o.style.display = "none", o.href = e, o.download = "iTab-" + n, o.target = "_blank", document.body.appendChild(o), o.click(), document.body.removeChild(o)
}
const n = (n, o = "0") => {
        !window.origin.includes("go.itab.link") && n.includes("files.codelife.cc/") ? e(n, o) : (console.log(n), fetch(n).then((function(e) {
            return e.blob()
        })).then((n => {
            e(window.URL.createObjectURL(n), o)
        })))
    },
    o = (e, n = "0") => {
        let o = new Blob([e], {
            type: "application/json;charset=utf-8"
        });
        const t = document.createElement("a");
        t.style.display = "none", t.href = window.URL.createObjectURL(o), t.download = "iTab" + n, document.body.appendChild(t), t.click(), document.body.removeChild(t)
    };
export {
    o as a, n as d
};