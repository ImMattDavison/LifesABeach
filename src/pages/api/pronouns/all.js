import data from '/public/json/pronouns.json'

export default function handler(req, res) {

    const pronouns = []

    for (let i = 0; i < data.pronouns.length; i++) {
        console.log(data.pronouns[i].short)
        if (!pronouns.includes(data.pronouns[i].short)) {
            pronouns.push(data.pronouns[i].short.toString().replaceAll(',', '/'))
        }
    }

    res.status(200).json({
        "pronouns" : pronouns
    })
}