const students = [{id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95}]

exports.getUsers = () => { return students; };

exports.getUser = (id) => { return students.filter(u => u.id == id)[0]; };

exports.postUser = (user) => { students.concat(user); }

exports.deleteUser = (user) => { students.filter(u => u.id != user.id); }