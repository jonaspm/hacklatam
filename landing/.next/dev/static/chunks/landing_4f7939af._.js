(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/landing/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/landing/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/landing/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            setIsVisible(true);
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex flex-col justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/mexico-map.png",
                    alt: "",
                    className: "max-w-[85%] max-h-[85%] object-contain opacity-70",
                    style: {
                        mixBlendMode: "multiply",
                        filter: "contrast(1.6)"
                    }
                }, void 0, false, {
                    fileName: "[project]/landing/components/landing/hero-section.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/landing/components/landing/hero-section.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none opacity-30",
                children: [
                    [
                        ...Array(8)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute h-px bg-foreground/10",
                            style: {
                                top: `${12.5 * (i + 1)}%`,
                                left: 0,
                                right: 0
                            }
                        }, `h-${i}`, false, {
                            fileName: "[project]/landing/components/landing/hero-section.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)),
                    [
                        ...Array(12)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-px bg-foreground/10",
                            style: {
                                left: `${8.33 * (i + 1)}%`,
                                top: 0,
                                bottom: 0
                            }
                        }, `v-${i}`, false, {
                            fileName: "[project]/landing/components/landing/hero-section.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/landing/components/landing/hero-section.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-3 text-sm font-medium text-muted-foreground",
                            style: {
                                fontFamily: '"Outfit", sans-serif'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-8 h-px bg-foreground/30"
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/hero-section.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                "No Nos La Hacen"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/landing/components/landing/hero-section.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/hero-section.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `max-w-5xl text-[clamp(1.75rem,4.5vw,3.25rem)] font-display leading-[1.15] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            children: "Monitoreo de canales oficiales del gobierno y noticias relacionadas con corrupción en México, recibe resúmenes directamente a tu WhatsApp."
                        }, void 0, false, {
                            fileName: "[project]/landing/components/landing/hero-section.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/hero-section.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-start transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            className: "bg-foreground hover:bg-foreground/90 text-background px-10 h-16 text-base rounded-full group",
                            children: [
                                "Recibir resúmenes",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/hero-section.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/landing/components/landing/hero-section.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/hero-section.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing/components/landing/hero-section.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing/components/landing/hero-section.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/whatsapp-subscribe-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppSubscribeSection",
    ()=>WhatsAppSubscribeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const WhatsAppIcon = ({ size = 20 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: size,
        height: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
            lineNumber: 7,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = WhatsAppIcon;
const CheckIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "currentColor",
        width: "14",
        height: "14",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CheckIcon;
const ShieldIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "currentColor",
        width: "14",
        height: "14",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = ShieldIcon;
const ArrowIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "currentColor",
        width: "16",
        height: "16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = ArrowIcon;
function WhatsAppSubscribeSection() {
    _s();
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (phone.replace(/\D/g, "").length >= 10) {
            setSubmitted(true);
        }
    };
    const isValid = phone.replace(/\D/g, "").length >= 10;
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: {
                background: "#f5f5f0",
                padding: "80px 24px",
                display: "flex",
                justifyContent: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%",
                        maxWidth: 440,
                        textAlign: "center",
                        animation: "wsFadeUp 0.5s ease-out"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 56,
                                height: 56,
                                borderRadius: "50%",
                                background: "#1a1a1a",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 28px",
                                color: "#fff"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontFamily: '"Instrument Serif", serif',
                                fontSize: 36,
                                fontWeight: 400,
                                fontStyle: "italic",
                                color: "#1a1a1a",
                                margin: "0 0 12px"
                            },
                            children: "¡Listo!"
                        }, void 0, false, {
                            fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 15,
                                color: "#999",
                                margin: 0,
                                lineHeight: 1.7,
                                maxWidth: 300,
                                marginLeft: "auto",
                                marginRight: "auto"
                            },
                            children: "Pronto recibirás resúmenes de transparencia directamente en tu WhatsApp."
                        }, void 0, false, {
                            fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes wsFadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
                }, void 0, false, {
                    fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#f5f5f0",
            padding: "80px 24px",
            display: "flex",
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: 440,
                    animation: "wsFadeUp 0.5s ease-out"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 28
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 32,
                                    height: 1,
                                    background: "#ccc"
                                }
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: "#999",
                                    letterSpacing: "0.02em"
                                },
                                children: "Suscripción"
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: '"Instrument Serif", serif',
                            fontSize: "clamp(28px, 4vw, 38px)",
                            fontWeight: 400,
                            color: "#1a1a1a",
                            margin: "0 0 8px",
                            lineHeight: 1.15,
                            letterSpacing: "-0.01em"
                        },
                        children: [
                            "Recibe resúmenes en",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontStyle: "italic"
                                },
                                children: "tu WhatsApp."
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 15,
                            color: "#999",
                            margin: "0 0 36px",
                            lineHeight: 1.7,
                            maxWidth: 360
                        },
                        children: "Ingresa tu número y empieza a recibir resúmenes de noticias y transparencia directamente en tu teléfono."
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#fff",
                            borderRadius: 16,
                            border: "1px solid #e8e8e4",
                            padding: "28px 24px",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            padding: "0 14px",
                                            background: "#fafaf8",
                                            border: "1px solid #e8e8e4",
                                            borderRadius: 12,
                                            fontSize: 14,
                                            color: "#666",
                                            whiteSpace: "nowrap",
                                            flexShrink: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 16
                                                },
                                                children: "🇲🇽"
                                            }, void 0, false, {
                                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "+52"
                                            }, void 0, false, {
                                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        placeholder: "Tu número de WhatsApp",
                                        value: phone,
                                        onChange: (e)=>setPhone(e.target.value),
                                        onFocus: ()=>setFocused(true),
                                        onBlur: ()=>setFocused(false),
                                        style: {
                                            flex: 1,
                                            padding: "16px",
                                            background: "#fafaf8",
                                            border: focused ? "1px solid #1a1a1a" : "1px solid #e8e8e4",
                                            borderRadius: 12,
                                            color: "#1a1a1a",
                                            fontSize: 15,
                                            outline: "none",
                                            transition: "border-color 0.2s ease",
                                            fontFamily: "inherit",
                                            minWidth: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: !isValid,
                                onMouseEnter: ()=>setHovering(true),
                                onMouseLeave: ()=>setHovering(false),
                                style: {
                                    width: "100%",
                                    padding: "16px 24px",
                                    background: isValid ? hovering ? "#333" : "#1a1a1a" : "#e8e8e4",
                                    border: "none",
                                    borderRadius: 100,
                                    color: isValid ? "#fff" : "#bbb",
                                    fontSize: 15,
                                    fontWeight: 500,
                                    cursor: isValid ? "pointer" : "not-allowed",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 10,
                                    transition: "all 0.2s ease",
                                    fontFamily: "inherit"
                                },
                                children: [
                                    "Suscribirme",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {}, void 0, false, {
                                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            marginTop: 24,
                            paddingLeft: 4
                        },
                        children: [
                            {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                    fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                    lineNumber: 238,
                                    columnNumber: 21
                                }, this),
                                text: "Resúmenes diarios de transparencia"
                            },
                            {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                    fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                    lineNumber: 239,
                                    columnNumber: 21
                                }, this),
                                text: "Sin spam · cancela cuando quieras"
                            },
                            {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldIcon, {}, void 0, false, {
                                    fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                    lineNumber: 240,
                                    columnNumber: 21
                                }, this),
                                text: "Tu número es privado y seguro"
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    fontSize: 13,
                                    color: "#aaa"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#ccc",
                                            display: "flex"
                                        },
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this),
                                    item.text
                                ]
                            }, i, true, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            marginTop: 32,
                            fontSize: 12,
                            color: "#bbb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "#25D366",
                                    boxShadow: "0 0 6px rgba(37,211,102,0.4)",
                                    animation: "wsPulse 2s ease-in-out infinite"
                                }
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            "Servicio activo · Transparencia en tiempo real"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes wsFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wsPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        input::placeholder {
          color: #bbb;
        }
      `
            }, void 0, false, {
                fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing/components/landing/whatsapp-subscribe-section.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(WhatsAppSubscribeSection, "aobSCyk3hfTVsxA3E7+HSE9a5bg=");
_c4 = WhatsAppSubscribeSection;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "CheckIcon");
__turbopack_context__.k.register(_c2, "ShieldIcon");
__turbopack_context__.k.register(_c3, "ArrowIcon");
__turbopack_context__.k.register(_c4, "WhatsAppSubscribeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/lo-que-resolvemos-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoQueResolvemosSection",
    ()=>LoQueResolvemosSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const problems = [
    {
        number: "01",
        title: "La información existe pero no llega",
        description: "El gobierno publica en canales oficiales de YouTube y portales institucionales, pero el acceso real requiere tiempo, contexto y criterio que la mayoría no tiene."
    },
    {
        number: "02",
        title: "Es difícil distinguir lo relevante",
        description: "Entre horas de transmisión y volumen de noticias, identificar qué importa y qué no es un trabajo de tiempo completo. La mayoría lo abandona."
    },
    {
        number: "03",
        title: "El contexto se pierde entre sesiones",
        description: "Cada sesión de gobierno, cada decisión, tiene historia. Sin continuidad, los acuerdos se olvidan y la rendición de cuentas se vuelve imposible."
    }
];
function LoQueResolvemosSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoQueResolvemosSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "LoQueResolvemosSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["LoQueResolvemosSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "LoQueResolvemosSection.useEffect": ()=>observer.disconnect()
            })["LoQueResolvemosSection.useEffect"];
        }
    }["LoQueResolvemosSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative py-24 lg:py-32 border-t border-foreground/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16 lg:mb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-8 h-px bg-foreground/30"
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                "El problema"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-4xl lg:text-6xl font-display tracking-tight leading-[1.1] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                            children: "Lo que resolvemos."
                        }, void 0, false, {
                            fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-3 gap-0 border-t border-foreground/10",
                    children: problems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `py-12 lg:pr-16 border-b lg:border-b-0 lg:border-r border-foreground/10 last:border-r-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                            style: {
                                transitionDelay: `${index * 150}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-mono text-sm text-muted-foreground mb-8",
                                    children: item.number
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl lg:text-3xl font-display tracking-tight mb-5 leading-[1.2]",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground leading-relaxed",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.number, true, {
                            fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/landing/components/landing/lo-que-resolvemos-section.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(LoQueResolvemosSection, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c = LoQueResolvemosSection;
var _c;
__turbopack_context__.k.register(_c, "LoQueResolvemosSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PorQueLoResolvemosSection",
    ()=>PorQueLoResolvemosSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PorQueLoResolvemosSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PorQueLoResolvemosSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "PorQueLoResolvemosSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["PorQueLoResolvemosSection.useEffect"], {
                threshold: 0.15
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "PorQueLoResolvemosSection.useEffect": ()=>observer.disconnect()
            })["PorQueLoResolvemosSection.useEffect"];
        }
    }["PorQueLoResolvemosSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative py-24 lg:py-32 border-t border-foreground/10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-0 bottom-0 w-px bg-foreground/5 pointer-events-none hidden lg:block"
            }, void 0, false, {
                fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-6 lg:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-8 h-px bg-foreground/30"
                                        }, void 0, false, {
                                            fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        "La misión"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-4xl lg:text-6xl font-display tracking-tight leading-[1.1] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                                    children: [
                                        "Por qué lo",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        "resolvemos."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl lg:text-2xl leading-relaxed text-foreground mb-8",
                                    children: "La información pública pertenece a todos. El problema no es que no exista — es que está diseñada para no ser consumida."
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground leading-relaxed mb-6",
                                    children: "No somos un medio, no tomamos posición política y no generamos contenido propio. Procesamos fuentes abiertas y verificables — videos oficiales, sesiones públicas, noticias de interés general — y los convertimos en resúmenes claros con enlace a la fuente original."
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground leading-relaxed",
                                    children: "La transparencia no debería requerir tiempo libre. Por eso llevamos el contexto directamente a tu teléfono."
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing/components/landing/por-que-lo-resolvemos-section.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(PorQueLoResolvemosSection, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c = PorQueLoResolvemosSection;
var _c;
__turbopack_context__.k.register(_c, "PorQueLoResolvemosSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/how-it-works-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowItWorksSection",
    ()=>HowItWorksSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const steps = [
    {
        number: "I",
        title: "Monitoreamos fuentes públicas",
        description: "Rastreamos canales oficiales en YouTube y medios de interés público. Solo datos abiertos y verificables."
    },
    {
        number: "II",
        title: "Generamos contexto",
        description: "Procesamos videos y noticias para extraer lo relevante. Cada resumen enlaza a su fuente original."
    },
    {
        number: "III",
        title: "Te llega a WhatsApp",
        description: "Resumen, contexto y enlace al material original. Directo a tu teléfono, sin intermediarios."
    }
];
function HowItWorksSection() {
    _s();
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowItWorksSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "HowItWorksSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["HowItWorksSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "HowItWorksSection.useEffect": ()=>observer.disconnect()
            })["HowItWorksSection.useEffect"];
        }
    }["HowItWorksSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowItWorksSection.useEffect": ()=>{
            const interval = setInterval({
                "HowItWorksSection.useEffect.interval": ()=>{
                    setActiveStep({
                        "HowItWorksSection.useEffect.interval": (prev)=>(prev + 1) % steps.length
                    }["HowItWorksSection.useEffect.interval"]);
                }
            }["HowItWorksSection.useEffect.interval"], 5000);
            return ({
                "HowItWorksSection.useEffect": ()=>clearInterval(interval)
            })["HowItWorksSection.useEffect"];
        }
    }["HowItWorksSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "how-it-works",
        ref: sectionRef,
        className: "jsx-e6d5695f83c7df5a" + " " + "relative py-24 lg:py-32 bg-foreground text-background overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e6d5695f83c7df5a" + " " + "absolute inset-0 opacity-[0.03] pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
                    },
                    className: "jsx-e6d5695f83c7df5a" + " " + "absolute inset-0"
                }, void 0, false, {
                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e6d5695f83c7df5a" + " " + "relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e6d5695f83c7df5a" + " " + "mb-16 lg:mb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e6d5695f83c7df5a" + " " + "inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e6d5695f83c7df5a" + " " + "w-8 h-px bg-background/30"
                                    }, void 0, false, {
                                        fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    "Proceso"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-e6d5695f83c7df5a" + " " + `text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                                children: [
                                    "Tres pasos.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-e6d5695f83c7df5a"
                                    }, void 0, false, {
                                        fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e6d5695f83c7df5a" + " " + "text-background/50",
                                        children: "Información conectada."
                                    }, void 0, false, {
                                        fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e6d5695f83c7df5a" + " " + "grid lg:grid-cols-2 gap-16 lg:gap-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e6d5695f83c7df5a" + " " + "space-y-0",
                                children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveStep(index),
                                        className: "jsx-e6d5695f83c7df5a" + " " + `w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e6d5695f83c7df5a" + " " + "flex items-start gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e6d5695f83c7df5a" + " " + "font-display text-3xl text-background/30",
                                                    children: step.number
                                                }, void 0, false, {
                                                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e6d5695f83c7df5a" + " " + "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-e6d5695f83c7df5a" + " " + "text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300",
                                                            children: step.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-e6d5695f83c7df5a" + " " + "text-background/60 leading-relaxed",
                                                            children: step.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, this),
                                                        activeStep === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e6d5695f83c7df5a" + " " + "mt-4 h-px bg-background/20 overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    animation: 'progress 5s linear forwards'
                                                                },
                                                                className: "jsx-e6d5695f83c7df5a" + " " + "h-full bg-background w-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    }, step.number, false, {
                                        fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e6d5695f83c7df5a" + " " + "lg:sticky lg:top-32 self-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e6d5695f83c7df5a" + " " + "border border-background/10 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e6d5695f83c7df5a" + " " + "px-6 py-4 border-b border-background/10 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e6d5695f83c7df5a" + " " + "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e6d5695f83c7df5a" + " " + "w-3 h-3 rounded-full bg-background/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e6d5695f83c7df5a" + " " + "w-3 h-3 rounded-full bg-background/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e6d5695f83c7df5a" + " " + "w-3 h-3 rounded-full bg-background/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e6d5695f83c7df5a" + " " + "text-xs font-mono text-background/40",
                                                    children: "para ti"
                                                }, void 0, false, {
                                                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e6d5695f83c7df5a" + " " + "p-8 lg:p-10 min-h-[280px] flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-e6d5695f83c7df5a" + " " + "text-xl lg:text-2xl font-display leading-relaxed text-background/85",
                                                    children: [
                                                        "Porque la información pública es tuya.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                            className: "jsx-e6d5695f83c7df5a"
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Porque nadie debería tener que buscar",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                            className: "jsx-e6d5695f83c7df5a"
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 19
                                                        }, this),
                                                        "entre miles de páginas para saber",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                            className: "jsx-e6d5695f83c7df5a"
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 19
                                                        }, this),
                                                        "qué hacen con tu dinero."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-e6d5695f83c7df5a" + " " + "mt-6 text-xl lg:text-2xl font-display leading-relaxed text-background",
                                                    children: "Nosotros lo hacemos por ti."
                                                }, void 0, false, {
                                                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e6d5695f83c7df5a" + " " + "px-6 py-4 border-t border-background/10 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e6d5695f83c7df5a" + " " + "w-2 h-2 rounded-full bg-green-400 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e6d5695f83c7df5a" + " " + "text-xs font-mono text-background/40",
                                                    children: "Transparencia activa"
                                                }, void 0, false, {
                                                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e6d5695f83c7df5a",
                children: "@keyframes progress{0%{width:0%}to{width:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing/components/landing/how-it-works-section.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(HowItWorksSection, "CLBQs7OAC8+9NFDLtEUZuZUryOE=");
_c = HowItWorksSection;
var _c;
__turbopack_context__.k.register(_c, "HowItWorksSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/whatsapp-subscribe-inline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppSubscribeInline",
    ()=>WhatsAppSubscribeInline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ArrowIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "currentColor",
        width: "16",
        height: "16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
            lineNumber: 7,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ArrowIcon;
function WhatsAppSubscribeInline() {
    _s();
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (phone.replace(/\D/g, "").length >= 10) {
            setSubmitted(true);
        }
    };
    const isValid = phone.replace(/\D/g, "").length >= 10;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#fafaf8",
            borderTop: "1px solid #e8e8e4",
            borderBottom: "1px solid #e8e8e4",
            padding: "56px 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 960,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    gap: 48,
                    flexWrap: "wrap"
                },
                children: [
                    submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 240,
                            textAlign: "center",
                            padding: "8px 0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: '"Instrument Serif", serif',
                                    fontSize: 22,
                                    fontStyle: "italic",
                                    color: "#1a1a1a",
                                    margin: 0
                                },
                                children: "¡Listo, te tenemos!"
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 14,
                                    color: "#999",
                                    margin: "6px 0 0"
                                },
                                children: "Pronto recibirás resúmenes en tu WhatsApp."
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 240
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: '"Instrument Serif", serif',
                                    fontSize: "clamp(20px, 2.5vw, 26px)",
                                    fontWeight: 400,
                                    color: "#1a1a1a",
                                    margin: "0 0 6px",
                                    lineHeight: 1.2
                                },
                                children: "Suscríbete al resumen diario."
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 14,
                                    color: "#999",
                                    margin: 0,
                                    lineHeight: 1.6
                                },
                                children: "Sin spam · cancela cuando quieras."
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    !submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        style: {
                            flex: 2,
                            minWidth: 280,
                            display: "flex",
                            gap: 10,
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "0 14px",
                                    background: "#fff",
                                    border: "1px solid #e8e8e4",
                                    borderRadius: 12,
                                    fontSize: 14,
                                    color: "#666",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0,
                                    height: 52
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 16
                                        },
                                        children: "🇲🇽"
                                    }, void 0, false, {
                                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "+52"
                                    }, void 0, false, {
                                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                placeholder: "Tu número de WhatsApp",
                                value: phone,
                                onChange: (e)=>setPhone(e.target.value),
                                onFocus: ()=>setFocused(true),
                                onBlur: ()=>setFocused(false),
                                style: {
                                    flex: 1,
                                    minWidth: 160,
                                    padding: "0 16px",
                                    height: 52,
                                    background: "#fff",
                                    border: focused ? "1px solid #1a1a1a" : "1px solid #e8e8e4",
                                    borderRadius: 12,
                                    color: "#1a1a1a",
                                    fontSize: 15,
                                    outline: "none",
                                    transition: "border-color 0.2s ease",
                                    fontFamily: "inherit"
                                }
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !isValid,
                                onMouseEnter: ()=>setHovering(true),
                                onMouseLeave: ()=>setHovering(false),
                                style: {
                                    padding: "0 24px",
                                    height: 52,
                                    background: isValid ? hovering ? "#333" : "#1a1a1a" : "#e8e8e4",
                                    border: "none",
                                    borderRadius: 100,
                                    color: isValid ? "#fff" : "#bbb",
                                    fontSize: 15,
                                    fontWeight: 500,
                                    cursor: isValid ? "pointer" : "not-allowed",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    transition: "all 0.2s ease",
                                    fontFamily: "inherit",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0
                                },
                                children: [
                                    "Suscribirme",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {}, void 0, false, {
                                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        input::placeholder {
          color: #bbb;
        }
      `
            }, void 0, false, {
                fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing/components/landing/whatsapp-subscribe-inline.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(WhatsAppSubscribeInline, "aobSCyk3hfTVsxA3E7+HSE9a5bg=");
_c1 = WhatsAppSubscribeInline;
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrowIcon");
__turbopack_context__.k.register(_c1, "WhatsAppSubscribeInline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/animated-tetrahedron.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedTetrahedron",
    ()=>AnimatedTetrahedron
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AnimatedTetrahedron() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedTetrahedron.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const chars = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";
            let time = 0;
            const resize = {
                "AnimatedTetrahedron.useEffect.resize": ()=>{
                    const dpr = window.devicePixelRatio || 1;
                    const rect = canvas.getBoundingClientRect();
                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;
                    ctx.scale(dpr, dpr);
                }
            }["AnimatedTetrahedron.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            // Tetrahedron vertices
            const vertices = [
                {
                    x: 0,
                    y: 1,
                    z: 0
                },
                {
                    x: -0.943,
                    y: -0.333,
                    z: -0.5
                },
                {
                    x: 0.943,
                    y: -0.333,
                    z: -0.5
                },
                {
                    x: 0,
                    y: -0.333,
                    z: 1
                }
            ];
            // Edges connecting vertices
            const edges = [
                [
                    0,
                    1
                ],
                [
                    0,
                    2
                ],
                [
                    0,
                    3
                ],
                [
                    1,
                    2
                ],
                [
                    2,
                    3
                ],
                [
                    3,
                    1
                ]
            ];
            // Faces for filling with points
            const faces = [
                [
                    0,
                    1,
                    2
                ],
                [
                    0,
                    2,
                    3
                ],
                [
                    0,
                    3,
                    1
                ],
                [
                    1,
                    3,
                    2
                ]
            ];
            const rotateY = {
                "AnimatedTetrahedron.useEffect.rotateY": (point, angle)=>({
                        x: point.x * Math.cos(angle) - point.z * Math.sin(angle),
                        y: point.y,
                        z: point.x * Math.sin(angle) + point.z * Math.cos(angle)
                    })
            }["AnimatedTetrahedron.useEffect.rotateY"];
            const rotateX = {
                "AnimatedTetrahedron.useEffect.rotateX": (point, angle)=>({
                        x: point.x,
                        y: point.y * Math.cos(angle) - point.z * Math.sin(angle),
                        z: point.y * Math.sin(angle) + point.z * Math.cos(angle)
                    })
            }["AnimatedTetrahedron.useEffect.rotateX"];
            const rotateZ = {
                "AnimatedTetrahedron.useEffect.rotateZ": (point, angle)=>({
                        x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
                        y: point.x * Math.sin(angle) + point.y * Math.cos(angle),
                        z: point.z
                    })
            }["AnimatedTetrahedron.useEffect.rotateZ"];
            const render = {
                "AnimatedTetrahedron.useEffect.render": ()=>{
                    const rect = canvas.getBoundingClientRect();
                    ctx.clearRect(0, 0, rect.width, rect.height);
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const scale = Math.min(rect.width, rect.height) * 0.7;
                    ctx.font = "18px monospace";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    const points = [];
                    // Generate points along edges
                    edges.forEach({
                        "AnimatedTetrahedron.useEffect.render": ([i, j])=>{
                            const v1 = vertices[i];
                            const v2 = vertices[j];
                            for(let t = 0; t <= 1; t += 0.05){
                                let point = {
                                    x: v1.x + (v2.x - v1.x) * t,
                                    y: v1.y + (v2.y - v1.y) * t,
                                    z: v1.z + (v2.z - v1.z) * t
                                };
                                // Apply rotations
                                point = rotateY(point, time * 0.4);
                                point = rotateX(point, time * 0.3);
                                point = rotateZ(point, time * 0.2);
                                const depth = (point.z + 1.5) / 3;
                                const charIndex = Math.floor(depth * (chars.length - 1));
                                points.push({
                                    x: centerX + point.x * scale,
                                    y: centerY - point.y * scale,
                                    z: point.z,
                                    char: chars[Math.min(charIndex, chars.length - 1)]
                                });
                            }
                        }
                    }["AnimatedTetrahedron.useEffect.render"]);
                    // Generate points on faces for a filled look
                    faces.forEach({
                        "AnimatedTetrahedron.useEffect.render": ([i, j, k])=>{
                            const v1 = vertices[i];
                            const v2 = vertices[j];
                            const v3 = vertices[k];
                            for(let u = 0; u <= 1; u += 0.12){
                                for(let v = 0; v <= 1 - u; v += 0.12){
                                    const w = 1 - u - v;
                                    let point = {
                                        x: v1.x * u + v2.x * v + v3.x * w,
                                        y: v1.y * u + v2.y * v + v3.y * w,
                                        z: v1.z * u + v2.z * v + v3.z * w
                                    };
                                    // Apply rotations
                                    point = rotateY(point, time * 0.4);
                                    point = rotateX(point, time * 0.3);
                                    point = rotateZ(point, time * 0.2);
                                    const depth = (point.z + 1.5) / 3;
                                    const charIndex = Math.floor(depth * (chars.length - 1));
                                    points.push({
                                        x: centerX + point.x * scale,
                                        y: centerY - point.y * scale,
                                        z: point.z,
                                        char: chars[Math.min(charIndex, chars.length - 1)]
                                    });
                                }
                            }
                        }
                    }["AnimatedTetrahedron.useEffect.render"]);
                    // Sort by z for depth
                    points.sort({
                        "AnimatedTetrahedron.useEffect.render": (a, b)=>a.z - b.z
                    }["AnimatedTetrahedron.useEffect.render"]);
                    // Draw points
                    points.forEach({
                        "AnimatedTetrahedron.useEffect.render": (point)=>{
                            const alpha = 0.15 + (point.z + 1.5) * 0.25;
                            ctx.fillStyle = `rgba(0, 0, 0, ${Math.min(alpha, 0.9)})`;
                            ctx.fillText(point.char, point.x, point.y);
                        }
                    }["AnimatedTetrahedron.useEffect.render"]);
                    time += 0.015;
                    frameRef.current = requestAnimationFrame(render);
                }
            }["AnimatedTetrahedron.useEffect.render"];
            render();
            return ({
                "AnimatedTetrahedron.useEffect": ()=>{
                    window.removeEventListener("resize", resize);
                    cancelAnimationFrame(frameRef.current);
                }
            })["AnimatedTetrahedron.useEffect"];
        }
    }["AnimatedTetrahedron.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "w-full h-full",
        style: {
            display: "block"
        }
    }, void 0, false, {
        fileName: "[project]/landing/components/landing/animated-tetrahedron.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(AnimatedTetrahedron, "mGyapFl2cjlrbL2X6vE7BHRR52I=");
_c = AnimatedTetrahedron;
var _c;
__turbopack_context__.k.register(_c, "AnimatedTetrahedron");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/cta-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaSection",
    ()=>CtaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/landing/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$components$2f$landing$2f$animated$2d$tetrahedron$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/components/landing/animated-tetrahedron.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CtaSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtaSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "CtaSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["CtaSection.useEffect"], {
                threshold: 0.2
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "CtaSection.useEffect": ()=>observer.disconnect()
            })["CtaSection.useEffect"];
        }
    }["CtaSection.useEffect"], []);
    const handleMouseMove = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left) / rect.width * 100,
            y: (e.clientY - rect.top) / rect.height * 100
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative py-24 lg:py-32 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 lg:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative border border-foreground transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                onMouseMove: handleMouseMove,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300",
                        style: {
                            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/cta-section.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 px-8 lg:px-16 py-16 lg:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row items-center justify-between gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]",
                                            children: [
                                                "La información pública",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/landing/components/landing/cta-section.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                "merece visibilidad."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/landing/components/landing/cta-section.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl",
                                            children: "Únete a la comunidad que recibe resúmenes claros, con evidencia y fuente original, directo en WhatsApp."
                                        }, void 0, false, {
                                            fileName: "[project]/landing/components/landing/cta-section.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    className: "bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group",
                                                    children: [
                                                        "Unirme por WhatsApp",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/cta-section.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/landing/components/landing/cta-section.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    variant: "outline",
                                                    className: "h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5",
                                                    children: "Recibir alertas"
                                                }, void 0, false, {
                                                    fileName: "[project]/landing/components/landing/cta-section.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/landing/components/landing/cta-section.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mt-8 font-mono",
                                            children: "Sin tarjeta de crédito"
                                        }, void 0, false, {
                                            fileName: "[project]/landing/components/landing/cta-section.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/landing/components/landing/cta-section.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$components$2f$landing$2f$animated$2d$tetrahedron$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedTetrahedron"], {}, void 0, false, {
                                        fileName: "[project]/landing/components/landing/cta-section.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/landing/components/landing/cta-section.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/landing/components/landing/cta-section.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/cta-section.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10"
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/cta-section.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10"
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/cta-section.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing/components/landing/cta-section.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/landing/components/landing/cta-section.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/landing/components/landing/cta-section.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(CtaSection, "IBTljjRpX5lDEtAsGTTy9bikdg0=");
_c = CtaSection;
var _c;
__turbopack_context__.k.register(_c, "CtaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/animated-wave.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedWave",
    ()=>AnimatedWave
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AnimatedWave() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedWave.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const chars = "·∘○◯◌●◉";
            let time = 0;
            const resize = {
                "AnimatedWave.useEffect.resize": ()=>{
                    const dpr = window.devicePixelRatio || 1;
                    const rect = canvas.getBoundingClientRect();
                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;
                    ctx.scale(dpr, dpr);
                }
            }["AnimatedWave.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            const render = {
                "AnimatedWave.useEffect.render": ()=>{
                    const rect = canvas.getBoundingClientRect();
                    ctx.clearRect(0, 0, rect.width, rect.height);
                    ctx.font = "14px monospace";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    const cols = Math.floor(rect.width / 20);
                    const rows = Math.floor(rect.height / 20);
                    for(let y = 0; y < rows; y++){
                        for(let x = 0; x < cols; x++){
                            const px = (x + 0.5) * (rect.width / cols);
                            const py = (y + 0.5) * (rect.height / rows);
                            // Multiple wave interference
                            const wave1 = Math.sin(x * 0.2 + time * 2) * Math.cos(y * 0.15 + time);
                            const wave2 = Math.sin((x + y) * 0.1 + time * 1.5);
                            const wave3 = Math.cos(x * 0.1 - y * 0.1 + time * 0.8);
                            const combined = (wave1 + wave2 + wave3) / 3;
                            const normalized = (combined + 1) / 2;
                            const charIndex = Math.floor(normalized * (chars.length - 1));
                            const alpha = 0.15 + normalized * 0.5;
                            ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
                            ctx.fillText(chars[charIndex], px, py);
                        }
                    }
                    time += 0.03;
                    frameRef.current = requestAnimationFrame(render);
                }
            }["AnimatedWave.useEffect.render"];
            render();
            return ({
                "AnimatedWave.useEffect": ()=>{
                    window.removeEventListener("resize", resize);
                    cancelAnimationFrame(frameRef.current);
                }
            })["AnimatedWave.useEffect"];
        }
    }["AnimatedWave.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "w-full h-full",
        style: {
            display: "block"
        }
    }, void 0, false, {
        fileName: "[project]/landing/components/landing/animated-wave.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(AnimatedWave, "mGyapFl2cjlrbL2X6vE7BHRR52I=");
_c = AnimatedWave;
var _c;
__turbopack_context__.k.register(_c, "AnimatedWave");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/landing/components/landing/footer-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterSection",
    ()=>FooterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/landing/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$components$2f$landing$2f$animated$2d$wave$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/landing/components/landing/animated-wave.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const footerLinks = {
    Plataforma: [
        {
            name: "Capacidades",
            href: "#features"
        },
        {
            name: "Cómo funciona",
            href: "#how-it-works"
        },
        {
            name: "Membresía",
            href: "#pricing"
        },
        {
            name: "Fuentes",
            href: "#integrations"
        }
    ],
    Recursos: [
        {
            name: "Metodología",
            href: "#developers"
        },
        {
            name: "Canales monitoreados",
            href: "#"
        },
        {
            name: "Tecnología",
            href: "#developers"
        },
        {
            name: "Estado del sistema",
            href: "#"
        }
    ],
    Nosotros: [
        {
            name: "Acerca de",
            href: "#"
        },
        {
            name: "Blog",
            href: "#"
        },
        {
            name: "Comunidad",
            href: "#",
            badge: "Abierta"
        },
        {
            name: "Contacto",
            href: "#"
        }
    ],
    Legal: [
        {
            name: "Privacidad",
            href: "#"
        },
        {
            name: "Términos",
            href: "#"
        },
        {
            name: "Confianza",
            href: "#security"
        }
    ]
};
const socialLinks = [
    {
        name: "X",
        href: "#"
    },
    {
        name: "WhatsApp",
        href: "#"
    },
    {
        name: "LinkedIn",
        href: "#"
    }
];
function FooterSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative border-t border-foreground/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$components$2f$landing$2f$animated$2d$wave$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedWave"], {}, void 0, false, {
                    fileName: "[project]/landing/components/landing/footer-section.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/landing/components/landing/footer-section.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-16 lg:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "inline-flex items-center gap-2 mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-display",
                                                children: "No Nos La Hacen"
                                            }, void 0, false, {
                                                fileName: "[project]/landing/components/landing/footer-section.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/landing/components/landing/footer-section.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed mb-8 max-w-xs",
                                            children: "Infraestructura de transparencia digital para México. Monitoreo, contexto y acceso a información pública."
                                        }, void 0, false, {
                                            fileName: "[project]/landing/components/landing/footer-section.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-6",
                                            children: socialLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    className: "text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group",
                                                    children: [
                                                        link.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            className: "w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/landing/components/landing/footer-section.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, link.name, true, {
                                                    fileName: "[project]/landing/components/landing/footer-section.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/landing/components/landing/footer-section.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/landing/components/landing/footer-section.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                Object.entries(footerLinks).map(([title, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-medium mb-6",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/landing/components/landing/footer-section.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link.href,
                                                            className: "text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2",
                                                            children: [
                                                                link.name,
                                                                "badge" in link && link.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs px-2 py-0.5 bg-foreground text-background rounded-full",
                                                                    children: link.badge
                                                                }, void 0, false, {
                                                                    fileName: "[project]/landing/components/landing/footer-section.tsx",
                                                                    lineNumber: 89,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/landing/components/landing/footer-section.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, link.name, false, {
                                                        fileName: "[project]/landing/components/landing/footer-section.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/landing/components/landing/footer-section.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, title, true, {
                                        fileName: "[project]/landing/components/landing/footer-section.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/landing/components/landing/footer-section.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/landing/components/landing/footer-section.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "2025 No Nos La Hacen. Todos los derechos reservados."
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/footer-section.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 text-sm text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/landing/components/landing/footer-section.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        "Sistema operativo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/landing/components/landing/footer-section.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/landing/components/landing/footer-section.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/landing/components/landing/footer-section.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/landing/components/landing/footer-section.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/landing/components/landing/footer-section.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = FooterSection;
var _c;
__turbopack_context__.k.register(_c, "FooterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=landing_4f7939af._.js.map