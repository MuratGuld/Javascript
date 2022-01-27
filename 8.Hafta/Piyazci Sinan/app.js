import { fishFarm, EUCountries, swissRomandeRegion } from './data.js';
import { filterByPriceRange,filterByStock,filterByBernWinter,sortByEntryDate,listFishTypes,filterByEUOrigin,filterByMinPrice,sumstockVolume,findExpensiveFish,filterMostDurableFishes,getCountryList,filterSwissRomandeFishes,filterByTwoSeasonal,sumFishPrices,filterByLocation,FilterBySeason,filterByNonEUOrigin,sumGram } from './functions.js';

//1) What are the names of the fish whose stock is over 500 kg?

const fishBesYuzKgUzeri = filterByStock(fishFarm,500)

console.log("Fish with a stock amount over 500 Kg : " + fishBesYuzKgUzeri)

//2) Price range 9Fr. with 12 Fr. What are the fish in between?

const balikFiyatDokuzOnikiFr = filterByPriceRange(fishFarm,9,12)

console.log("Fish priced between 9 Fr and 12 Fr : " + balikFiyatDokuzOnikiFr)

//3) Which fish are sold only in Bern and in the winter season?

const fishBernWinterList = filterByBernWinter(fishFarm); 

console.log("Fish sold only in Bern and in the winter season :" + fishBernWinterList)

//4) Sort the fishes according to their expiration dates.

sortByEntryDate(fishFarm);

const fishesByEntryDateSorted = listFishTypes(fishFarm);

console.log("Sort of fish species according to expiration date:" + fishesByEntryDateSorted);

//5) List the fish from the European Union (EU) with a price less than 10Fr in alphabetical order.

const EUOriginFishList = filterByEUOrigin(fishFarm);

const EUOriginSmallerTenFrList = filterByMinPrice(EUOriginFishList);

console.log("Alphabetical list of fish from the European Union with a price less than 10 Fr : " + EUOriginSmallerTenFrList)

//6) What is the total fish stock?

const totalFishStock = sumstockVolume(fishFarm);

console.log(`Total fish stock ${totalFishStock} kg`)

//7) Which fish is the most expensive?

const mostExpensiveFish = findExpensiveFish(fishFarm);
console.log("The most expensive fish : " + mostExpensiveFish)

//8) From which country do the longest standing fish come from?

const mostDurableFishList = filterMostDurableFishes(fishFarm)

const mostDurableFishCountryList = getCountryList(mostDurableFishList)

console.log("Countries of fish that can stand the longest : " + mostDurableFishCountryList)

//9) What is the average price of fish sold in the swiss romande region for the winter and autumn seasons?

const swissRomandeFishList = filterSwissRomandeFishes(fishFarm);

const swissRomandeFishSeasonalList = filterByTwoSeasonal(swissRomandeFishList)

const totalPrice = sumFishPrices(swissRomandeFishSeasonalList)

const priceAverage = totalPrice / swissRomandeFishSeasonalList.length
console.log(`Average price of fish sold in swiss romande region for winter and autumn seasons ${Math.round(priceAverage)} Fr `);

//10) How many fish in total are in stock for the Canton of Ticino?

const FishesForTicino = filterByLocation(fishFarm,"TI");

const sumFishStockTicino = sumstockVolume(FishesForTicino);

console.log(`Total fish in stock for the Canton of Ticino ${sumFishStockTicino} kg`)

//11) Find the average weight of fish from outside the EU and sold in ZH during the summer season?

const summerFishList = FilterBySeason(fishFarm,"Summer")

const summerInZurichList = filterByLocation(summerFishList,"ZH")

const summerInZurichListNoNEUFishList = filterByNonEUOrigin(summerInZurichList);

const totalGram = sumGram(summerInZurichListNoNEUFishList);

const averageGram = totalGram / summerInZurichListNoNEUFishList.length;

console.log(`Average weight of fish from outside the EU and sold in ZH during the summer season ${averageGram} gr`)