import { fishFarm, EUCountries, swissRomandeRegion } from './data.js';

//1) What are the names of the fish whose stock is over 500 kg?
export const filterByStock = (pFishFarm, Amount) => {
    return pFishFarm.filter((pFish) => pFish.stockVolumeInKg > Amount)
                        .map((pFish) => pFish.fishType)
}

//2) Price range 9Fr. with 12 Fr. What are the fish in between?
export const filterByPriceRange = (pFishFarm, pMinPrice, pMaxPrice) => {
    return pFishFarm
        .filter((pFish) => (pFish.price > pMinPrice) && (pFish.price < pMaxPrice))
            .map((pFish) => pFish.fishType);
}

//3) Which fish are sold only in Bern and in the winter season?

export const filterByBernWinter = (pFarmFish) => {
    return pFarmFish
            .filter((pFish) => pFish.saleLocations.includes("BE") && pFish.season == "Winter")
            .map((pFish) => pFish.fishType);
}

//4) Sort the fishes according to their expiration dates.

export const sortByEntryDate = (pFishFarm) => {
    pFishFarm.sort((a, b) => b.entryDate.getTime() - a.entryDate.getTime());
};

export const listFishTypes = (pFishFarm) => pFishFarm.map((fish) => fish.fishType);

//5) List the fish from the European Union (EU) with a price less than 10Fr in alphabetical order.

export const filterByEUOrigin = (pFishFarm) => {
    return pFishFarm.filter((pFish) => {
    if (EUCountries.includes(pFish.originCountry)) {
        return pFish;
    }})
};

export const filterByMinPrice = (pFishFarm) => {
    return pFishFarm.filter((pFish) => pFish.price < 10)
                .map((pFish) => pFish.fishType)
                    .sort();
};

//6) What is the total fish stock?

export const sumstockVolume = (pFishFarm) => {
    return pFishFarm.map((pFish) => pFish.stockVolumeInKg)
                .reduce((accumulator, num) => accumulator + num, 0);
};

//7) Which fish is the most expensive?

export const findExpensiveFish = (pFishFarm) => {
    
    const maxPrice = pFishFarm.map((fish) => fish.price)
                                .reduce((a, b) => Math.max(a, b), 0);

    const expensiveFish = fishFarm.find((fish) => fish.price == maxPrice)

    return expensiveFish.fishType;
}

//8) From which country do the longest standing fish come from?

export const filterMostDurableFishes = (pFishFarm) => {
    
    const durationInDaysValues = pFishFarm.map((pFish) => pFish.durationInDays);

    const biggestDurationValue = Math.max(...durationInDaysValues);
    
    const mostDurableFishesList = fishFarm.filter((pFish) => {
        if(pFish.durationInDays == biggestDurationValue){
            return pFish;
        }
    })

    return mostDurableFishesList
}

export const getCountryList = (pFishFarm) => {
    return pFishFarm.map((pFish) => pFish.originCountry)
}

//9) What is the average price of fish sold in the swiss romande region for the winter and autumn seasons?

export const filterSwissRomandeFishes = (pFishFarm) => {
    return pFishFarm.filter((pFish) => {    
    if (pFish.saleLocations.some((location) => swissRomandeRegion.includes(location))){
        return pFish;
    }})
}

export const filterByTwoSeasonal = (pFishFarm) => {
    return pFishFarm.filter((pFish) => (pFish.season == "Winter") || (pFish.season == "Autumn"))
 }

export const sumFishPrices = (pFishFarm) => {
    return pFishFarm.map((pFish) => pFish.price)
                        .reduce(function(a, b) { return a + b; })
}

//10) How many fish in total are in stock for the Canton of Ticino?

export const filterByLocation = (pFishFarm,pLocation) => {
    return pFishFarm.filter((pFish) => {
    if (pFish.saleLocations.includes(pLocation)) {
        return pFish;
    }
})}

//11) Find the average weight of fish from outside the EU and sold in ZH during the summer season?

export const FilterBySeason = (pFishFarm,Season) => pFishFarm.filter((pFish) => pFish.season == Season);

export const filterByNonEUOrigin = (pFishFarm) => {
    return pFishFarm.filter((pFish) => {
    if (!EUCountries.includes(pFish.originCountry)) {
        return pFish;
    }
})};

export const sumGram = (pFishFarm) => {
    return pFishFarm.map(pFish => pFish.itemWeightInGrams)
                .reduce((accumulator, num) => accumulator + num, 0)
}