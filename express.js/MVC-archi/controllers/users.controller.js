exports.getUsers= (req, res) => {
    res.send(htmlForm);
}

exports.postUsers= (req, res) => {
    const name= req.body.name;
    const age= Number(req.body.age);
    const user={
        name,
        age
    }
    users.push(user)
    res.status(201).json({
        success: true,
        users
    })
}