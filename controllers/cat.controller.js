var cats = ["Paddington", "Garfield"]

exports.create = (req, res)=>{
    const {name} = req.body
    cats.push(name)
    res.send(`added cat:${name}`);
}
