const e = () => {
    try {
        const e = document.createElement("canvas").getContext("experimental-webgl"),
            t = null == e ? void 0 : e.getExtension("WEBGL_debug_renderer_info");
        return (null == e ? void 0 : e.getParameter(t.UNMASKED_RENDERER_WEBGL)).includes("NVIDIA")
    } catch (e) {
        return !1
    }
};
export {
    e as isGoodGpu
};