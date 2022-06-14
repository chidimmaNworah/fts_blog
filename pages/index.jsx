//import type { NextPage } from 'next'
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {PostCard, Categories, PostWidget, Pagination} from '../components'
import {getPosts} from '../services'
import {FeaturedPosts} from '../sections'

const Home = ({posts}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)

  //chang page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>FTS Blog</title>
        <link rel="icon" href="/head_icon.svg" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>

      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div  className='lg:col-span-8 col-span-1'>
          {currentPosts.map((post) => <PostCard post={post.node} key={post.title}/>)}
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      
        </div>
        
        <div className="lg:col-span-4 col-span-1">
          <div className="classname lg:sticky relative top-8">
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

