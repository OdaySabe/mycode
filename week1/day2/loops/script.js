const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for (let i = 0; i < names.length; i++) 
{    p = { name: names[i], age: ages[i] } 
 people.push(p)}
for (let q in people)
{    console.log(people[q])}for (let q of people)
{    console.log(q.name + " is " + q.age + " years old")}
const posts = [    { id: 1, text: "Love this product" },
               { id: 2, text: "This is the worst. DON'T BUY!" }, 
               { id: 3, text: "So glad I found this. Bought four already!" }]
      for (let post of posts) {    console.log(post);}
for (let post in posts) 
{    if (posts[post].id == 2) 
{        posts.splice(post, 1);    }
}
for (let post of posts) 
{    console.log(post);
}
console.log("===================")
const postss = [    {        id: 1,        text: "Love this product",        comments: []    }
                ,    {        id: 2,        text: "This is the worst. DON'T BUY!", 
                      comments: [            { id: 1, text: "Idiot has no idea" }, 
                                 { id: 2, text: "Fool!" }, 
                                 { id: 3, text: "I agree!" } 
                                ]    },
                {        id: 3,        text: "So glad I found this. Bought four already!",
                 comments: []    }]
for (let q of postss)
{    console.log(q);    
 console.log("-----------")  
                       for (let q2 of q.comments) 
{        console.log(q2);    }
}
for (let q of postss) {    
  if (q.id == 2) 
  {        for (let q2 of q.comments) 
  {            if (q2.id == 3) 
  {               q2.text="";               q2.id=0;            } 
  }           
  }
}
console.log("===================")
for (let q of postss)
{    console.log(q);    console.log("-----------")    for (let q2 of q.comments) 
{        console.log(q2);    }
}
console.log("==============");
const dictionary = {    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
                    "B": ["Banana", "Bonkers", "Brain", "Bump"],
                    "C": ["Callous", "Chain", "Coil", "Czech"]  }
counterA=dictionary.A.length;
counterB=dictionary.B.length; 
counterC=dictionary.C.length 
console.log("Words with A")
while(counterA>0)
{    counterA-=1;    
 console.log(dictionary.A[counterA]);
}console.log("Words with B")
while(counterB>0)
{    counterB-=1; 
 console.log(dictionary.B[counterB]);
}
console.log("Words with C")
while(counterC>0)
{    counterC-=1;    
 console.log(dictionary.C[counterC]);   
}
