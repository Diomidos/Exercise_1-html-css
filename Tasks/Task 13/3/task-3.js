function handleObject(obj, key, action) {
    console.log(action) 
if (action === 'add') { 
    delete obj[key];  
} else {
    console.log(obj); 
}
};
const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
};         
handleObject(student, 'programmingLanguage', 'add');
handleObject(student, 'programmingLanguage', 'add');