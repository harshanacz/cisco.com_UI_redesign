import React from 'react';
import ArticleBox from './ArticleBox';
import { articles } from '../constants';

const ArticlesSection = () => {
  return (
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
  );
};

export default ArticlesSection;
