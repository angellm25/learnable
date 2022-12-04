function serveBooks(){
	if (confirmation === true) {
		let choose = prompt(`Choose which Genre-section to shop at: "YoungAdult", "Fantasy", "Thriller", "HistoricalFiction" `)
		switch(choose){
			case "YoungAdult":
				let showAdult = prompt(`These are the books available: ${YoungAdult}, which would you like to buy?`)
				if (showAdult === "It ends with us" || "Throttled" || "Forever interrupted" || "The Inheritannce Games Series") {
				 	let price = alert("The price for this item is 5000 ")
				 	const addRegardless = confirm("Add item to cart?")

				 	if (addRegardless === true) {
				 		alert("Item added to cart successfully!!")
				 	}else{
				 		break
				 	}
				}else{
					return
				}
				break
			case "Fantasy":
				let showFantasy = prompt(`These are the books available: ${Fantasy}, which would you like to buy?`)
				 if (showFantasy === "The cruel prince trilogy " || " Shatter me series" || " The young elites series" || " Crescent city series") {
				 	let price = alert("The price for this item is 4000 ")
				 	const addRegardless = confirm("Add item to cart?")

				 	if (addRegardless === true) {
				 		alert("Item added to cart successfully!!")
				 	}else{
				 		break
				 	}
				}
				break
			case "Thriller":
				let showThriller = prompt(`These are the books available: ${Thriller}, which would you like to buy?`)
				 if (showThriller === "Verity " || " The silent patient" || " The bride collector" || " The widow" || "Haunting Adeline" ) {
				 	let price = alert("The price for this item is 3000 ")
				 	const addRegardless = confirm("Add item to cart?")

				 	if (addRegardless === true) {
				 		alert("Item added to cart successfully!!")
				 	}else{
				 		break
				 	}
				}else{
					break
				}
				break
			case "HistoricalFiction":
				let showHistoricalFiction = prompt(`These are the books available: ${HistoricalFiction}, which would you like to buy?`)
				 if (showHistoricalFiction === "Pride and Prejudice " || " Northanger abbey" || " Sense and sensibility") {
				 	let price = alert("The price for this item is 2000 ")
				 	const addRegardless = confirm("Add item to cart?")

				 	if (addRegardless === true) {
				 		alert("Item added to cart successfully!!")
				 	}else{
				 		break
				 	}
				}else{
					break
				}
				break
			default:
				let deadEnd = alert("The genre you listed is not available")
				break
		}
	}
}


const YoungAdult = [
    "It ends with us", 
    "Throttled", 
    "Forever interrupted", 
    "The Inheritannce Games Series"
]

const Fantasy = [ 
	"The cruel prince trilogy", 
	"Shatter me series", 
	"The young elites series", 
	"Crescent city series"
]

const Thriller = [
	"Verity", 
	"The silent patient", 
	"The bride collector", 
	"The widow", 
	"Haunting Adeline"
]

const HistoricalFiction = [
	"Pride and Prejudice", 
	"Northanger abbey",
	"Sense and sensibility"
]

const welcome = alert("Welcome to Angel's online bookstore");
let confirmation = confirm("Would you like to read today?");
serveBooks()