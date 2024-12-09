// const tenderUser= new Object()
const tenderUser={}

tenderUser.id="abc123"
tenderUser.name="sammy"
tenderUser.isLoggedIn=false

//console.log(tenderUser);

const regularUser={
    email:"sammy@gmail.com",
    fullName:{
        userfullname:{
            firstname:"sammy",
            lastname:"Joe"
        }
    }
}
// console.log(regularUser.fullName.userfullname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

const obj3={...obj1,...obj2}//spread operator is used to combine two or more object
//console.log(obj3);

const course={
    coursename:"javascript",
    print:"999",
    courseInstructore:"sammy"
}

// course.courseInstructore()

// const {courseInstructore}=course
// console.log(courseInstructore);

const {courseInstructore:teacher}=course//object destructing
console.log(teacher);

