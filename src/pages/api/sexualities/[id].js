// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '/public/json/sexualities.json'

export default function handler(req, res) {

    // console.log req to visualise request data
    console.log(req.query)
    // console.log data from json file to visualise data
    // console.log(data)

    // Declare variables as empty arrays to store data
    const flags = []
    const aka = []
    const definition = []

    
    // Filter data to find sexuality that matches the id
    for (let i = 0; i < data.sexualities.length; i++) {
        if (data.sexualities[i].name.toLowerCase() == req.query.id.toLowerCase()) {
            const sexuality = data.sexualities[i]
            console.log(sexuality)
            flags.push('http://' + req.headers.host + '/image/sexuality/' + sexuality.flag)
            aka.push(sexuality.aka)
            definition.push(sexuality.definition)
        }
    }

    // Send response with data
    // if(definition.length > 0) {
    res.status(200).json({
        "status" : "200 OK",
        "sexuality" : req.query.id.toLowerCase(),
        "definition" : definition,
        "aka" : aka,
        "flags" : flags
    })
    // } else {
    //     res.status(404).json({
    //         "error 404" : "Sexuality not found"
    //     })
    // }
}