import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  return (
    <Layout title={process.env.appName}>
      <div className="container">
      <div class="grid gap-2 md:grid-cols-2">
      <div className="py-10">
          <div className="w-full md:h-3/4 md:w-full bg-gray-200  py-10 px-8 rounded-xl">
            <h1 className="text-3xl font-bold"> Welcome to <span class="text-blue-500">Next JS</span></h1>
            <p className="text-gray-500 normal-case py-4"> Satu framework react yang dapat menangani permasalahan tersebut dengan cara yang sederhana. Structure react memungkinkan kita untuk membangun frontend React application dengan mudah dan mampu menangani server side buat anda.</p>

            <div className="py-5 space-x-4">
                <Link href="">
                  <a className="w-24 p-2 bg-blue-700 rounded-md text-white font-semibold hover:bg-blue-800 ">Get NextJS</a>

                </Link>

                <Link href="">
                  <a className="w-24 p-2 border-2 border-blue-500 rounded-md text-blue-500 font-semibold hover:bg-blue-600 focus:text-white">Get ReactJS</a>

                </Link>
            </div>
          </div>
          </div>
              <div className="px-2">
                    <Image src="/img-programing.jpg"
                    alt="Picture of the author"
                    width={700}
                    height={500} className="rounded-xl"/>
          </div>
        </div>
      </div>
    </Layout>

  )
}
