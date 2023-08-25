const operations = "+-/*";
const symbols = "!@#$%^&*()_<>?{}:.,;'";

function check(str) {
    let op1 = ""
    for (const op of operations) {
        for (const s of str) {
            if (op === s) {
                // console.log("it contains", op, s);
                op1 += op
            } else {
                // console.log("doesn't contain", op, s);
            }
        }
    }
    // console.log(op1)
    return op1
}

const string = "-ei/o/w/+";
console.log("It contain symbol" , check(string));
