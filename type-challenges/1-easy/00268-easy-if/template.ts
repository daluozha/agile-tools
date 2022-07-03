// type compatibility
// null 严格模式、非严格模式的区别

type If<C extends boolean, T, F> = C extends true ? T : F
