number = 1

const person = [
    {
      "_id": "640b3dc084a37c1d185a47f8",
      "isActive": false,
      "age": 38,
      "eyeColor": "blue",
      "name": "Lamb Wiley",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3dc0a933c5d639fda2ca",
      "isActive": false,
      "age": 25,
      "eyeColor": "green",
      "name": "Jeanne Benjamin",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3dc0c6efe784e2b8c5dd",
      "isActive": true,
      "age": 20,
      "eyeColor": "brown",
      "name": "Arline Compton",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3dc01c265c88207888c5",
      "isActive": true,
      "age": 35,
      "eyeColor": "blue",
      "name": "Francis Hancock",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3dc01bf7307e2f09564f",
      "isActive": false,
      "age": 27,
      "eyeColor": "blue",
      "name": "Barbara Gardner",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3dc07f1b275c3b310a69",
      "isActive": false,
      "age": 23,
      "eyeColor": "brown",
      "name": "Robin Mcdaniel",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3dc0e2ee43739bf9134e",
      "isActive": true,
      "age": 33,
      "eyeColor": "brown",
      "name": "Lucy Cantu",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3dc0c7e2c148e93b768c",
      "isActive": false,
      "age": 31,
      "eyeColor": "brown",
      "name": "Le Oneil",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3dc0672e98c64d84be7e",
      "isActive": true,
      "age": 38,
      "eyeColor": "brown",
      "name": "Battle Solis",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3dc052e660068592b6ed",
      "isActive": true,
      "age": 21,
      "eyeColor": "green",
      "name": "Ward Irwin",
      "gender": "male",
      "favoriteFruit": "banana"
    }
]


// -----nomor1
for (let i=0;i<person.length; i++) {
    if (person[i].favoriteFruit === "banana" && person[i].eyeColor === "green") {
      console.log("helo")
        console.log(person[i])
    } else {}
}


// -----nomor2
// let arr = []
// for (let i=0;i<person.length; i++) {
//   if (person[i].age > 30) {
//       arr.push(person[i])
//   }
// }
// console.log(arr.length)

// -----nomor3
// for (let i=0;i<person.length; i++) {
//   if (person[i].isActive === true && person[i].gender ==="female") {
//       console.log(person[i])
//   } else {}
// }

// -----nomor4
// for (let i=0;i<person.length; i++) {
//   if (person[i].age < 25 || person[i].age > 30 && person[i].eyeColor === "blue") {
//       console.log(person[i])
//   } else {}
// }

// ----nomor5
// for (let i=0;i<person.length; i++) {
//   if (person[i].name.match("w")) {
//       console.log(person[i])
//   } else {}
// }

// -----nomor6
// for (let i=0;i<person.length; i++) {
//   if (person[i].age > 25 && person[i].isActive == false && person[i].gender == "male") {
//       console.log(person[i])
//   } else {}
// }

// -----nomor7
// for (let i=0;i<person.length; i++) {
//   if (person[i].age < 30 || person[i].eyeColor === "brown" && person[i].favoriteFruit === "banana") {
//       console.log(person[i])
//   } else {}
// }

// -----nomor8
// for (let i=0;i<person.length; i++) {
//   if (person[i].gender === "male") {
//       console.log(person[i])
//   } else {}
// }

// -----nomor9
// for (let i=0;i<person.length; i++) {
//   if (person[i].eyeColor === "blue") {
//       console.log(person[i])
//   } else {}
// }

// -----nomor10
// for (let i=0;i<person.length; i++) {
//   if (person[i].age > 30) {
//       console.log(person[i])
//   } else {}
// }