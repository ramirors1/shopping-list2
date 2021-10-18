const shoppingLists = [
{
    id: 1,
    item: "Milk",
    price: 2.90
},

{
    id: 2,
    item: "Eggs",
    price: 2.00
},

{
    id: 3,
    item: "Bread",
    price: 1.75
}
]

const newItem = {
    item: "Lettuce",
    price: 1.50,
    
}

const cucumbers = {
    item: "Cucumbers",
    price: 4,
    
}
const cereal = {
    item: "Cereal",
    price: 5,
    
}
const wine = {
    item: "Wine",
    price: 9,
    
}
const beer = {
    item: "Beer",
    price: 7,
    
}
const charcoal = {
    item: "Charcoal",
    price: 10,
    
}

const addToShoppingList = (listObject) => {
    const lastIndex = shoppingLists.length - 1
    const currentLastList = shoppingLists[lastIndex]
    const maxId = currentLastList.id
    const idForNewList = maxId + 1

    listObject.id = idForNewList

    const dateCreated = Date();
    listObject.dateCreated = dateCreated
    
    shoppingLists.push(listObject)
}

addToShoppingList(newItem)
addToShoppingList(cucumbers)
addToShoppingList(cereal)
addToShoppingList(wine)
addToShoppingList(beer)
addToShoppingList(charcoal)

for (list of shoppingLists) {
    if (list.price >= 8) {
       console.log(`Damn, ${list.item} is expensive.`) 
    }
}


// // Display all the shoppingList
// for (const list of shoppingLists) {
//     // console.log(`The ${list.item} costs ${list.price} dollars.`)
//     console.log(shoppingLists)
// }

// console.log(shoppingLists)

// const createNote = (note) => {
//     /*
//         Step 1: Get maximum id current in array
//     */
//     // Get index of last item in array
//     const lastIndex = notes.length - 1

//     // Get the last object in the array
//     const currentLastNote = notes[lastIndex]

//     // Get id property value of last phone
//     const maxId = currentLastNote.id

//     /*
//         Step 2: Increase the current max id by 1
//     */
//     const idForNewNote = maxId + 1

//     /*
//         Step 3: Add the id property to the toy object
//     */
//     note.id = idForNewNote
    
//     const dateCreated = Date();
//     note.dateCreated = dateCreated
//     /*
//         Step 4: Add the toy object to the array
//     */
//     notes.push(note)
// }
// const moreNewerNote = {
//     subject: "Dust",
//     date: "3 Oct 2021",
//     feeling: "sucked",
//     timeSpent: 30,
    
// }

// createNote(moreNewerNote)

// console.log(notes)