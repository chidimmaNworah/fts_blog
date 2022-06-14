import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { AuthorProfile } from '.';
import { getCategories } from '../services';
import { useRouter } from 'next/router';


const Header = ({author}) => {
    const {asPath} = useRouter()
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])



    return (
        <div className="w-full mx-auto px-10 mb-8 sticky bg-[#006CEA] top-0 z-10">
            <div className="border-b w-full border-blue-400 p-5">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <span className="cursor-pointer text-white font-semibold text-5xl tracking-wide">
                            Favourite Tech Solutions
                        </span>
                    </Link>
                </div>
                <div className="md:flex items-center justify-center text-lg">
                        <Link href="/">
                            <span className={asPath === '/' ? 'list active' : 'list'}>
                                Home
                            </span>
                        </Link>
                        <Link href="/author">
                            <span className={asPath === '/author' ? 'list active' : 'list'}>
                                Authors
                            </span>
                        </Link>
                        <Link href="/about">
                            <span className={asPath === '/about' ? 'list active' : 'list'}>
                                About Us
                            </span>
                        </Link>
                        <Link href="/contact">
                            <span className={asPath === '/contact' ? 'list active' : 'list'}>
                                Contact Us
                            </span>
                        </Link>
                </div>
            </div>
        </div>
    
    )
}

export default Header

export async function getStaticProps() {
    const posts = (await AuthorProfile()) || []
  
    return {
      props:{author}
    }
  }
  