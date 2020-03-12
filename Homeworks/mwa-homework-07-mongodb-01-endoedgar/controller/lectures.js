let connection;

const getCollection = function () {
    return connection.db().collection('lectures');
}

module.exports.setConnection = function(con) {
    connection = con;
}

module.exports.find = async function() {
    return await getCollection().find({}).toArray();
}

module.exports.post = async function(lecture) {
    await getCollection().insertOne(lecture);

    return { status: "Lecture inserted!"};
}

module.exports.findOne = async function(_id) {
    return await getCollection().findOne({ _id });
}

module.exports.deleteOne = async function(_id) {
    await getCollection().deleteOne({ _id });

    return { status: "Lecture deleted!"};
}

module.exports.search = async function(q) {
    return await getCollection().find({ course: new RegExp(q, 'i') }).toArray();
}