import React from 'react';
import ArticleBox from './ArticleBox';
import { articles } from '../constants';

const ArticlesSection = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-24">Our latest innovations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 px-16 py-16">
      {articles.map((article, index) => (
        <ArticleBox
          key={index}
          title={article.title}
          description={article.description}
          image={article.image}
          link={article.link}
        />
      ))}
    </div>
    </div>
  );
};

export default ArticlesSection;
