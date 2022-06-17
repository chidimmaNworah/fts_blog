//import type { NextPage } from 'next'
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {PostCard, Categories, PostWidget, Pagination} from '../components'
import {getPosts, postsSearchQuery} from '../services'
import {FeaturedPosts} from '../sections'
import { useLazyQuery } from '@apollo/client'

const Home = ({posts}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)

  //chang page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // const [searchFilter, setSearchFilter] = useState('')
  // const [executeSearch, {data}] = useLazyQuery(
  //   postsSearchQuery
  // )

  return (
    
    <div className="container mx-auto px-10 mb-8">


      <Head>
        <title>FTS Blog</title>
        <link rel="icon" href="/head_icon.svg" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>

          <div className="flex justify-center pb-2">
                    <form action="">
                        <div className="relative items-center text-gray-200">
                        <label class="relative inline-block">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2"><ion-icon name="search-sharp"></ion-icon>
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 placeholder:text-gray-200 block bg-transparent w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                        placeholder="Search..." 
                        type="text" 
                        name="search"
                        // onChange={(event) => setSearchFilter(event.target.value)}
                        />
                        </label>
                        <button 
                        className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-sm rounded-md text-white px-6 py-2 m-4 cursor-pointer"
                        type="button" 
                        // onClick={() => executeSearch({
                        //   variables: {filter: searchFilter}
                        // })}
                        >Search</button>
                        </div>
                        
                    </form>
                    {/* {data && 
                      currentPosts.map((post) => (
                        <PostCard post={post.node} key={post.title}/>
                      ))} */}
                </div>

      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div  className='lg:col-span-8 col-span-1'>
          {currentPosts.map((post) => <PostCard post={post.node} key={post.title}/>)}
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      
        </div>
        
        <div className="lg:col-span-4 col-span-1">
          <div className="classname lg:sticky relative top-10">
            
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props:{posts}
  }
}

