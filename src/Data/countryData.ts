import {  defaultCountries, parseCountry } from "react-international-phone";

export const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return [
    'sa', 'eg', 'ae', 'jo', 'iq',  'sy',
     'kw', 'qa', 'bh', 'lb', 'om'
  ].includes(iso2);
});