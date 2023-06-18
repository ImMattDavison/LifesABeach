<h1 align='center'>Life's a Beach 🏖️</h1>

<p align='center'><i>don't get washed away in the sea of terminology</i></p>

![Life's a Beach thumbnail image](https://github.com/ImMattDavison/LifesABeach/assets/80921257/8302b105-8d0e-4f39-9fa4-0752c757b9dc)

## Learn and understand LGBT+ terminology. 🏳‍🌈

Life's a Beach is equipped with accurate and high-quality data and information to make it the perfect tool to either use for your personal learning or use our REST API to pull our data and information to your app! 

The pages within the web app include all you need to know about many sexualities and pronoun combinations, with examples on how to use pronouns in sentences, definitions for some of the most common sexual orientations. We alsop included the flags so that you can recognise them better out in the wild. Each page also shows you which API endpoint you need to use to get the same data and getting that data from there is simple! Here we did it in just a few lines of code: 
```js
export async function getStaticProps({ params }) {
    const sexuality = await axios.get('http://localhost:3000/api/sexualities/' + params.id)
    return {
        props: {
            sexuality: sexuality.data,
            params: params
        }
    }
}
```

![Douglas Beach](https://user-images.githubusercontent.com/66436400/246520763-936f6ccb-135d-4ded-95a5-487f2c7c816e.jpeg)

## Why we built Life's a Beach! 🌊

PrideHacks should be all about celebrating and understanding LGBT+ identities. As someone who identifies as LGBT+ (Matt) I understand just how difficult some people can find it to understand LGBT+ identities, no matter how much they'd love to. I think it is incredibly important that good educational content is available to support people in learning about the people they love and those that matter around them.

Why Life's a Beach? Well Adam wanted it to have beaches, so there's beaches. _To add to this! Beaches are calm, relaxing places which I have found to be a serene place whenever I feel stressed, unwanted or unloved. I can sit on the sand or walk through the sea and feel at peace. ~ Adam_

## Additional info ℹ️

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Run the project locally using `npm run dev` and open [http://localhost:3000](http://localhost:3000) with your browser to utilise its features.
