// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '/public/json/pronouns.json'

export default function handler(req, res) {

    // console.log req to visualise request data
    console.log(req.query)
    // console.log data from json file to visualise data
    // console.log(data)

    const popularShortCombinations = []
    const popularLongCombinations = []
    const sampleSentences = []
    const types = []
    const flags = []

    // Filter data to find pronouns that match the id
    for (let i = 0; i < data.pronouns.length; i++) {
        // console.log(data.pronouns[i].short)
        for (let j = 0; j < req.query.id.split('-').length; j++) {
            if (data.pronouns[i].short.includes(req.query.id.split('-')[j])) {
                const pronoun = data.pronouns[i]
                if (!flags.includes('http://' + req.headers.host + '/image/pronouns/' + pronoun.flag) && pronoun.flag !== undefined) {
                    flags.push('http://' + req.headers.host + '/image/pronouns/' + pronoun.flag)
                }
                if (!types.includes(pronoun.type)) {
                    types.push(pronoun.type)
                }
                if (!popularShortCombinations.includes(pronoun.short.toString().replaceAll(',', '/'))) {
                    popularShortCombinations.push(pronoun.short.toString().replaceAll(',', '/'))
                }
                if (!popularLongCombinations.includes(pronoun.long.toString().replaceAll(',', '/'))) {
                    popularLongCombinations.push(pronoun.long.toString().replaceAll(',', '/'))
                }
                for (let k = 0; k < pronoun.examples.length; k++) {
                    if (!sampleSentences.includes(pronoun.examples[k])) {
                        sampleSentences.push(pronoun.examples[k])
                    }
                }
            }
        }
    }

    // Send response with data
    res.status(200).json({
        "pronouns" : req.query.id.replaceAll('-', '/').toLowerCase(),
        "types" : types,
        "combinations" : {
            "popularShortCombinations" : popularShortCombinations,
            "popularLongCombinations" : popularLongCombinations,
        },
        "sampleSentences" : sampleSentences,
        "flags" : flags
    })
}