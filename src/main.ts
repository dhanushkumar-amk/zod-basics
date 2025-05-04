//! 1 => import the zod
import  { z } from 'zod';
import { ZodBigIntDef } from './../node_modules/zod/lib/types.d';

//? 2 => create a schema
const userscheme = z.object({
    name : z.string(),
    age : z.number(),
    email : z.string().email(),
})

//! 3 => create the data
const userData  = {
    name : 'dhanushkumar',
    age : 30,
    email : 'dhanuskumaramk@gmail.com'
}

//! 4 => validate the data
const validUser = userscheme.parse(userData);
// const validUser = userscheme.safeParse(userData);
console.log(validUser);


//! 5 => create a schema with optional and default values
const userscheme2 = z.object({
    name : z.string(),
    age : z.number().optional(),
    country : z.string().default('India'),
})


// 6 => create the data
const userData2  = {
    name : 'dhanushkumar',
    age : 30,
    // country : 'India'
}
// 7 => validate the data
const validUser2 = userscheme2.parse(userData2);
// const validUser2 = userscheme2.safeParse(userData2);
console.log(validUser2);


//! 8 => create a schema with nested object
const userScheme3 = z.object({
    name : z.string(),
    address : z.object({
        city : z.string(),
        state : z.string(),
        country : z.string(),
    })
})
// 9 => create the data
const userData3  = {
    name : 'dhanushkumar',
    address : {
        city : 'Chennai',
        state : 'Tamil Nadu',
        country : 'India'
    }
}

// 10 => validate the data
const validUser3 = userScheme3.parse(userData3);
// const validUser3 = userScheme3.safeParse(userData3);
console.log(validUser3);

// ! 11 => create a schema with array
const userScheme4 = z.object({
    name : z.string(),
    hobbies : z.array(z.string()),
    age : z.number().optional(),
})
// 12 => create the data
const userData4  = {
    name : 'dhanushkumar',
    hobbies : ['cricket', 'football', 'badminton'],
    age : 30
}
// 13 => validate the data
const validUser4 = userScheme4.parse(userData4);
console.log(validUser4);

// enum in Zod
const userScheme5 = z.enum(["admin", "user", "guest"]);
const userData5 = "admin";
console.log(userScheme5.parse(userData5));


// zod interface typescript
