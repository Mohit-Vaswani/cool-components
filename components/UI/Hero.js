import componentsData from '../../data/componentsDate';
import Link from 'next/link';

function Hero() {
  return (
    <section className="flex justify-center flex-wrap gap-10 mt-8 w-8/12">
      {
        componentsData.map((item, index) => (
          <Link href={item.link}>
          <article key={index} className="border-2 border-dashed border-gray-500 w-60 h-60 flex justify-center items-center cursor-pointer hover:border-solid hover:text-green-600 hover:border-green-600">
            <p>{item.cName}</p>
          </article>
          </Link>
        ))
      }
    </section>
  )
}

export default Hero