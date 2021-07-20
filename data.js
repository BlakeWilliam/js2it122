let trails = [
    { trailName : "Burroughs Mountain Loop", park: 'Mt Rainier National Park', city : 'Paradise Inn', state : 'WA', length : '9.7 miles', elevation_gain : '2595 feet'  },
    { trailName : "Mount Storm King", park: 'Olympic National Park', city : 'Port Angeles', state : 'WA', length : '5.3 miles', elevation_gain : '2076 feet'  },
    { trailName : "Lake Serene", park: 'Mount Baker Snoqualmie National Forest', city : 'Gold Bar', state : 'WA', length : '8.7 miles', elevation_gain : '2798 feet'  },
    { trailName : "Trap Lake", park: 'Alpine Lakes Wilderness', city : 'Leavenworth', state : 'WA', length : '8.8 miles', elevation_gain : '3070 feet'  },
    { trailName : "Gem Lake", park: 'Mount Baker Snoqualmie National Forest', city : 'Snoqualmie', state : 'WA', length : '11 miles', elevation_gain : '2670 feet'  }
];

// creat getAll function to return the array as data
const getAll = () => {
    return trails;
}

// create const to export specific trail
const getItem = (name) => {
    return trails.find((trailName) => {
        return trailName.trailName === name;
    });
}
console.log('data js file imported')


// export function
export { getAll, getItem }