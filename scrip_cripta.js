const minOnline = [5, 10, 15, 9];

console.log(minOnline);

let min = minOnline.slice (-3 , -1);

console.log(min);

let minTeor = min.concat([(min[1] + (min[1] - min[0]))]);

console.log(minTeor);

if (minOnline.pop() < (minTeor.pop() * 0.8)) {
    console.log("Понижение Тренда!");
    alert('Понижение тренда!');
} else {
    console.log("ok");
}