interface IStoreFilter {
    setItemFilter: (...params: any) => any;
    setPriceFilter: (...params: any) => any;
    categoryFilters?: string[]
}

export default IStoreFilter;