import Head from 'next/head'

export default function Home() {
  return (
    <div>

      <Head>
        <title> Wellcome to next</title>
        {/* using to get SEO */}
        <meta name='keywords' content='foods, menue, food prices' />
      </Head>

      <h1 className="text-3xl font-bold underline">Wellcome to next</h1>
      
      
    </div>
  )
}
