const studentService = require(`./student-service`);

let peter = {
    id: 1,
    name: `Peter`,
    age: 20,
    city: `Skopje`,
    academy: `Code`
}

let josh = {
    id: 2,
    name: `Josh`,
    age: 30,
    city: `Skopje`,
    academy: `Code`
}

let alex = {
    id: 3,
    name: `Alex`,
    age: 34,

    city: `Skopje`,
    academy: `Code`
}





// studentService.saveStudents(peter);
// studentService.addStudent(josh);



const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getStudent = () => {
    rl.question(`Which student are you looking for? ID: `, id => {
        console.log(studentService.getStudent(Number(id.trim())))
        rl.close();
    })
}

const edittStudent = () => {
    rl.question(`Which student do you want to edit ?`, id => {
        console.log(studentService.getStudent(Number(id.trim())));
        rl.question(`Add the new JSON object for the student `, editeddStudent => {
            studentService.editStudent(Number(id.trim()), JSON.parse(editeddStudent))
            rl.close();
        })
    })
}

const deleteStudent = () => {
    rl.question(`Which student do you want to delete? ID `, id => {
        studentService.deleteStudent(Number(id.trim()));
        rl.close()
    })
}

const addingStudent = () => {
    rl.question(`Write the name of the student you want to add to DB `, name => {
        studentService.addStudent(name);
        rl.close()
    })
}


rl.question(`What are you trying to do? `, answer => {
    switch (answer) {
        case `get-all`:
            console.log(studentService.getStudents());
            rl.close();
            break;
        case `get`:
            getStudent();
            break;
        case `edit`:
            edittStudent();
            break;
        case `delete`:
            deleteStudent();
            break;
        case `add`:
            addingStudent();
            break;
        default:
            console.log(`No such method!`);
            rl.close();
            break;
    }
})