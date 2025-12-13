import React from 'react';
import Banner from '../Components/Home/Banner';
import { ScaleLoader } from 'react-spinners';
import UseApps from '../hook/UseApps';
import AppsCard from '../Components/AppsCard';
import { Link } from 'react-router';


const Home = () => {
    const {  apps,loading } = UseApps()
    console.log(apps)

  const featuredApps = apps.slice(0, 8)
  console.log(featuredApps)

    return (
      <>
         {loading ? (
        <ScaleLoader />
      ) :(
      <Banner></Banner>
      )}



      <div className='text-center mt-20 '>
        <h1 className='text-4xl font-bold text-secondary'>Trending Apps</h1>
        <p className='m-5 text-gray-600  md:text-lg opacity-80 '>Explore All Trending Apps on the Market developed by us</p>

         {loading ? (
        <ScaleLoader />
      ) : (
        <div className=' max-w-11/12 mx-auto bg-purple-200 p-10 my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 rounded'>
          {featuredApps.map(app => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
        )}

        <Link to='/apps' className='common-btn p-10'>Show All</Link>
      </div>
      
      </>
    );
    
};

export default Home;