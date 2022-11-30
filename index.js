// Iteration 1: Names and Input
let hacker1 = "Hicham";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Chems";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let newHacker = ""
for (let i=0 ; i < hacker1.length; i++){
newHacker += `${hacker1[i].toUpperCase()} `
}
console.log(newHacker)

let hacker3 = ""
for (let i = hacker2.length - 1 ; i >= 0 ; i--){
hacker3 += hacker2[i]
}
console.log(hacker3)

if (hacker1.localeCompare(hacker2) === 1){
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) < 0) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//Bonus 1:
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim sapien neque, nec posuere augue efficitur id. Morbi accumsan, ex semper viverra molestie, sapien nunc consectetur dui, et venenatis purus nisi in ligula. Cras lacinia, arcu eget viverra tempus, quam massa fermentum risus, non faucibus odio nunc feugiat dui. Phasellus vestibulum odio vel risus blandit gravida. Ut sed vestibulum sem. Ut consectetur, massa sit amet condimentum luctus, ante dui tristique est, vel luctus turpis enim et nisi. Cras ultricies at risus ut pellentesque. In hac habitasse platea dictumst. Sed ut odio est.

Aenean in sagittis risus, in vehicula orci. Vivamus feugiat sapien nisi, id condimentum purus efficitur et. Donec sit amet augue eu neque congue pellentesque. Donec condimentum, justo ac sodales posuere, orci augue iaculis arcu, id volutpat augue est ut turpis. Aenean congue gravida orci sit amet congue. Ut ac viverra sapien, quis aliquet risus. Nunc urna eros, pulvinar at ipsum eget, faucibus lacinia felis. Vivamus vitae mattis ex, quis ultrices orci. Cras vestibulum neque non augue scelerisque, sed aliquet est dapibus.

Mauris imperdiet a sem id euismod. Mauris feugiat sem sed scelerisque ornare. Nullam in malesuada lacus. Nam sagittis elementum elit. Suspendisse purus sapien, venenatis venenatis dolor vitae, volutpat lacinia justo. Nulla faucibus, erat non accumsan iaculis, odio nibh vehicula nibh, in dignissim tellus ligula nec nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Vivamus tempor egestas iaculis. Pellentesque ex tortor, porttitor a felis sit amet, pellentesque bibendum erat. Morbi at rutrum dui. Proin enim nisl, tincidunt nec vehicula id, pellentesque vitae orci. Donec quis libero pharetra, ultricies sem vel, dapibus urna. Nam mauris justo, porta sit amet nunc a, posuere hendrerit leo. Aliquam fringilla fermentum lobortis. Sed eu neque vulputate, ornare sem ut, suscipit mauris.`

console.log(longText.length)
