/* eslint-disable linebreak-style */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function Home() {
  const phones = useLoaderData();
  return (
    <div>
      <h3>Show me all the phones you have.</h3>
      <h5>
        I got phones:
        {' '}
        {phones.length}
      </h5>
      {
                phones.map((phone) => <li><Link to={`/phones/${phone.id}`}>{phone.name}</Link></li>)
            }
    </div>
  );
}

export default Home;
