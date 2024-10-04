const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros);

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);



//agar array ke undar array ke undar array h or sab ek hi me dena h to "arr_name.flat(infinity)"
//Array.from(___) unndr jo bhiii doge vo array me convert kr dega , object sar de rhe to batana padhega ki kisko banna h array key yaa value  

// Array.of(__,__,__) unndr jo bhii element doge vo array me store ho jayenge

