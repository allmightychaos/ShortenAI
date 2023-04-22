import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick} from '../assets';
import trash from '../assets/trash.svg'

import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const [allArticles, setallArticles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles')
    );

    if (articlesFromLocalStorage) {
      setallArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setallArticles(updatedAllArticles);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form 
          className="relative flex justify-center items-center" 
          onSubmit={handleSubmit}
        >
          <img 
            className='absolute left-0 my-2 ml-3 w-5'
            src={linkIcon}
            alt="linkIcon" 
          />

          <input
            className="url-input peer"
            type="url"
            placeholder="Paste your article link here"
            value={article.url}
            onChange={(e) => setArticle({...
              article, url: e.target.value })}
            required
          />

          <button
            type="submit"
            className="submit-btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ⏎
          </button>
        </form>

        {/* History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={(e) => {
                if (e.target.className === 'link-card group') {
                  setArticle(item);
                }
              }}
              className='link-card group'
            >
              <div className="copy-btn">
                <img 
                  src={copy}
                  alt="copy"
                  className="w-[50%] h-[50%] object-contain"
                  onClick={() => {
                    navigator.clipboard.writeText(item.url);
                    e.target.src = tick;
                    setTimeout(() => {
                      e.target.src = copy;
                    }, 1000);
                  }}
                />
              </div>
              <p className='flex-1 font-satoshi blue-gradient-text font-bold text-sm truncate'>
                {item.url}
              </p>

              <button 
              className="trash-btn"
              onClick={() => {
                const updatedAllArticles = allArticles.filter(
                  (article) => article.url !== item.url
                );
                setallArticles(updatedAllArticles);
                localStorage.setItem(
                  'articles',
                  JSON.stringify(updatedAllArticles)
                );
                setArticle({ url: '', summary: '' });
              }}
              >
                <img 
                  src={trash}
                  alt="delete"
                  className='w-[50%] h-[50%] object-contain opacity-0 group-hover:opacity-40 active:opacity-70'
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Show Output */}
      <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Whoops, something went wrong... ꃋᴖꃋ 
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='ml-4 font-satoshi font-bold text-gray-600 text-xl'>
                Article <span className='green-gradient'>Summary</span>:
              </h2>
              <div className='summary-box'>
                <p className='font-inter font-medium text-m text-gray-700 p-4'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Demo