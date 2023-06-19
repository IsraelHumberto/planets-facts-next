import { Header, Hero } from "@/components";
import client from "@/sanity";


export default async function Home() {
    const linksHeader = await client.fetch(`*[_type == "planets"] | order(order asc) {name, color}`)
    const planets = await client.fetch(`*[_type == "planets" && order == 1][0]`)

    return (
        <>
            <Header linksHeader={linksHeader}/>
            <Hero planets={planets}/>
        </>
    )
}
