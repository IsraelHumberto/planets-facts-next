import { Header, Hero } from "@/components";
import client from "@/sanity";

export default async function Home() {
    const linksHeader = await client.fetch(`*[_type == "planets"]{name, color} | order(_createdAt asc)`)
    console.log(linksHeader);
    return (
        <>
            <Header linksHeader={linksHeader}/>
            <Hero />
        </>
    )
}
