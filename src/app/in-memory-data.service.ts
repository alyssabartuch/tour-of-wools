import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const wools = [
        {
            id: 101,
            name: 'Herding Cats',
            fiber: 'Superwash Targhee',
            month: 'March 2017'
        },
        {
            id: 102,
            name: 'North of the Wall',
            fiber: 'Cheviot',
            month: 'April 2017'
        },
        {
            id: 103,
            name: 'Merlin\'s Beard',
            fiber: 'Merino',
            month: 'May 2017'
        },
        {
            id: 104,
            name: 'Gilmore\'s Glorious Goods',
            fiber: 'Merino/Silk Blend',
            month: 'June 2017'
        },
        {
            id: 105,
            name: 'Electric Boogaloo',
            fiber: 'Falkland',
            month: 'July 2017'
        },
        {
            id: 106,
            name: 'Iocane Powder',
            fiber: 'Romney',
            month: 'August 2017'
        },
        {
            id: 107,
            name: 'A Girl Has No Name',
            fiber: 'Targhee',
            month: 'September 2017'
        },
        {
            id: 108,
            name: 'Maturin',
            fiber: 'Chevior',
            month: 'October 2017'
        },
        {
            id: 109,
            name: 'Gamora',
            fiber: 'Shetland',
            month: 'November 2017'
        },
        {
            id: 110,
            name: 'Meereen',
            fiber: 'Falkland',
            month: 'December 2017'
        }
    ];
    return {wools};
  }
}
