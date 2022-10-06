import React from 'react';
import Article from '../../components/article/Article';
import {Link} from 'react-router-dom';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = ({section, newsData}) => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">{section}</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        {newsData.map((data, index) => (
          <Link to={`/blog/${data.head}`}>
            <Article key={index} imgUrl={blog02} date="Sep 26, 2021" text={data.head} />
          </Link>
        ))}
        {/* <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
      </div>
    </div>
  </div>
);

export default Blog;
