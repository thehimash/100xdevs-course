const alluser= [{
    firstname: "Himanshu",
    gender: "male",
    metadata: {
    address: "patna"
    }
},

    {firstname:  "Ashu",
    gender: "male",
    metadata: {
    address: "patna"
    }
},

    {firstname: "shreya",
        gender: "female",
        metadata: {
        address: "delhi"
        }
}
    ]
    let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let mid = Math.floor(arr.length / 2);

for (let i = 0; i <= mid; i+=2) {
    console.log(arr[i]); 
}