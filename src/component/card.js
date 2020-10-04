import React from 'react';
import SpaceCard from './SpaceCard';
import FilterCard from './FilterCard';
const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012., 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

const Card = ({ apps }) => {
    
        <FilterCard years={years} />
        const cards = apps.map((app, index) => (
        <div key={index}>
            {/* <img src={app.links.mission_patch_small}></img> */}
            <SpaceCard app={app} />
        </div>
    
  ))

return (
    <>
      <FilterCard years={years} />
      {cards}
    </>
)
}


export default Card;
