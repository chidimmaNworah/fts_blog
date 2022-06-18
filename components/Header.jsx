import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { AuthorProfile } from '.';
import { getPosts, getAuthorPosts, getCategories } from '../services';
import { useRouter } from 'next/router';
import 'react-ionicons'


const Header = ({author}) => {
    const {asPath} = useRouter()

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    const [isMobile, setIsMobile] = useState(true)

    // const [query, setQuery] = useState()
    // const data = getPosts()

    // const search = () => {
    //     console.log(1)
    // }

    return (
        <div className="w-full mx-auto px-10 mb-2 sticky bg-[#006CEA] top-0 z-10">
            <div className="border-b w-full border-blue-400 p-5">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <span className="cursor-pointer text-white font-semibold text-5xl tracking-wide">
                            Urban Paparazzi
                        </span>
                    </Link>
                </div>
                <div className='md:flex items-center justify-center text-lg'>
                    <ul className={isMobile ? "nav-links nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}
                    >
                        <Link href="/">
                            <li className={asPath === '/' ? 'list active' : 'list'}>
                                Home
                            </li>
                        </Link>
                        <Link href="/author">
                            <li className={asPath === '/author' ? 'list active' : 'list'}>
                                Authors
                            </li>
                        </Link>
                        <Link href="/about">
                            <li className={asPath === '/about' ? 'list active' : 'list'}>
                                About Us
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li className={asPath === '/contact' ? 'list active' : 'list'}>
                                Contact Us
                            </li>
                        </Link>
                    </ul>
                <button className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? (<b>X</b>) : (<ion-icon name="menu-sharp"></ion-icon>)}
                </button>
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
  