import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';

const Newsboard = ({ category, search }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                let url = `https://newsapi.org/v2/top-headlines?q=${search}&country=in&category=${category}&apiKey=14819d8deed240eaa88844c9387e094b`;
                let response = await fetch(url);
                if (response.ok) {
                    let data = await response.json();
                    setArticles(data.articles);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchNews();
    }, [category, search]);

    return (
        <div>
            <h2 className='text-center'>
                Latest
                <span className='badge bg-danger'>
                    News
                </span>
            </h2>
            {articles.map((news, index) => (
                <Newsitem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                    publishedAt={news.publishedAt}
                />
            ))}
        </div>
    );
};

export default Newsboard;
