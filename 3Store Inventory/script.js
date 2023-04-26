const listItem = {
    book: 6,
    copy: 9,
    pen: 5
}

for (const item in listItem) {
    let key = item;
    let value = listItem[item] * 80 + " " + "INR";
    let myMap = new Map()
    myMap.set(key, value)
    console.log(myMap.get(key));
}
