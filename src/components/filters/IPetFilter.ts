interface IPetFilter {
  setPetFilter: (...params: any) => any;
  setPriceFilter: (...params: any) => any;
  breedFilters?: string[];
  setAgeFilter: (...params: any) => any;
  colorFilters?: string[];
  setColorFilters: (...params: any) => any;
}

export default IPetFilter;
