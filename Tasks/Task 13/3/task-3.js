// delete - если action равен delete, то функция handleObject() должна удалить свойство key из объекта obj и возвратить обновленный объект.

// function handleObject(obj, key, action) {
//     console.log(action) 
//         if (action === 'delete') { //если тип данных action = delete
//             delete obj[key];  // key равен 'programmingLanguage' удаляем этот ключ
//         } else {
//             console.log(obj); // если ключа нет, вернуть итоговый объект
//         }
//        };
    
//        const student = {
//         name: 'Maxim',
//         programmingLanguage: 'JavaScript',
//      };
    
//        handleObject(student, 'programmingLanguage', 'delete');
//        handleObject(student, 'programmingLanguage', 'add');
       

// get - если action равен get, то функция handleObject() должна вернуть значение ключа key в объекте obj.

    //    function handleObject(obj, key, action) {
    //     console.log(action) 
    //         if (action === 'get') { 
    //             delete obj[key];  
    //         } else {
    //             console.log(obj); 
    //         }
    //        };
        
    //        const student = {
    //         name: 'Maxim',
    //         programmingLanguage: 'JavaScript',
    //      };
        
    //        handleObject(student, 'programmingLanguage', 'get');
    //        handleObject(student, 'programmingLanguage', 'add');


    // add - если action равен add, то функция handleObject() должна добавить новый ключ key в объект object и присвоить значение пустой строки "". Также из функции необходимо возвратить обновленный объект obj.

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