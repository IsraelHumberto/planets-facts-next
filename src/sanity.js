import {createClient} from 'next-sanity'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
    token: process.env.SANITY_AUTH_TOKEN,
    useCdn: process.env.false
})

export default client