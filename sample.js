let samplelist = [
    {date : '2020/10/21',valueASC : '昇順で二番目に来るはず', valueDSC : '降順で二番目に来るはず'},
    {date : '2020/10/22',valueASC : '昇順で三番目に来るはず', valueDSC : '降順で一番目に来るはず'},
    {date : '2020/10/20',valueASC : '昇順で一番目に来るはず', valueDSC : '降順で三番目に来るはず'},
];

console.log('-------テストデータ--------')
samplelist.map((item,index) => {
    console.log(item);
});

let items = samplelist.sort((a,b) => {
    var dateA = a.date;
    var dateB = b.date;
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    // names must be equal
    return 0;
});

console.log('------------昇順並べ替え-----------')
items.map((item,index) => {
    console.log(item);
});

let items2 = samplelist.sort((a,b) => {
    var dateA = a.date;
    var dateB = b.date;
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    // names must be equal
    return 0;
});

console.log('------------降順並べ替え-----------')
items2.map((item,index) => {
    console.log(item);
});
