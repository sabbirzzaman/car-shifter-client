import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./Blog.css";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "How will you improve the performance of a React Application?",
      description:
        "Optimization is the first thing that every developer should keep in mind. We can optimize a react app in many ways. Here are some of them, Using components for every reusable part. using conditional rendering of the components, removing unnecessary awaits, and using Promise.all() wherever needed, less use of inline functions, etc. ",
    },
    {
      id: 2,
      title:
        "What are the different ways to manage a state in a React application?",
      description:
        "There are four main types of states that we can manage in react apps. local state, global state, server state, URL state. Local state is data we manage in one or another component. The local state is data we manage across in React using the useState hook. The global state is data we manage across multiple components. Server state is data that comes from an external server that must be integrated with our UI state. And the URL State is the data that exists on our URLs, including the pathname and query parameters.",
    },
    {
      id: 3,
      title: "How does prototypical inheritance work?",
      description:
        "Everything in Javascript is an object. The Prototypal Inheritance is a feature in javascript used to add methods and properties to objects. It is a method by which an object can inherit the properties and methods of another object. The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties.",
    },
    {
      id: 4,
      title:
        "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
      description:
        "For creating a search form for the desired data we can simply create an input form for typing the search keyword. Then we can create a state for storing keywords from the input form. We can use onChange or Submit Function for getting the keyword. Then we can find the keyword from the names of the data by using the includes() method of javascript.",
    },
    {
      id: 5,
      title: "What is a unit test? Why should write unit tests?",
      description:
        "In react, the components unit test means checking that the component renders correctly for the specified props. We should write unit testing ensures that all code meets quality standards before the production. The purpose of unit testing prevent regressions, exercise your code, faster feedback while developing.",
    },
  ];
  return (
    <section className="blog-container">
      <div className="container">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </section>
  );
};

export default Blog;
