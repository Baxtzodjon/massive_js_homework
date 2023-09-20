let arr = ["aziza", "samira", "xojik", "artyom", "vlad", "serega", "alex", "samandar", "tilav", "alina", "jony"];
let indexToRemove = prompt('Введите индекс элемента, который нужно удалить:');

if (indexToRemove >= 0 && indexToRemove < arr.length) {
    let name = arr[indexToRemove];
    arr.splice(indexToRemove, 1);
    console.log(`Имя ${name} удалено из массива.`);
} else {
    console.log("Некорректный индекс.");
}

console.log(arr);