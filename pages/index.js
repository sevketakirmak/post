import Head from 'next/head'
import axios from "axios"
import Card from '../components/Card'
import Category from '../components/Category'

Home.getInitialProps = async () =>{
  try {
    const res = await axios.get('https://oggustowp.bomajans.site/wp-json/wp/v2/posts');
    const list = res.data;
    const resCat = await axios.get('https://oggustowp.bomajans.site/wp-json/wp/v2/categories');
    const category = resCat.data;
    return { list, category };
  } catch (error) {
    return { error };
  }
}
export default function Home({list, category}) {
  console.log(category);
  console.log(list);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='posts'>
        {
          list.map(item=>{
            return <Card key={item.id} item = {item} />
          })
        }
      </div>
      <div className='categories'>
        {
          category.map(item=>{
            return <Category key={item.id} name={item.name} />
          })
        }

      </div>
      <style jsx>{`
        .posts, .categories{
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 10px;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .container{
          width: 90%;
          margin: auto;
        }
      `}</style>
    </div>
  )
}
