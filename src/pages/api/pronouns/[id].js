// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '/public/json/pronouns.json'

export default function handler(req, res) {
    console.log(req.query)
    res.status(200).json({ pronouns: req.query.id.replace('-', '/') })
}