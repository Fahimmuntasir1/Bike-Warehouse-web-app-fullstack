import React from "react";
import "./Blogs.css";

const Blog = () => {
  return (
    <div className="my-blogs">
      <h2 className="text-center">My Blogs</h2>
      <div className="border mb-3"></div>
      <div className="flex question items-center justify-around">
        <div className="img-and-title">
          <h2>1.Difference between javascript and nodejs</h2>
          <img
            src="https://i.ytimg.com/vi/7RUJ9E2Jk48/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className="mx-3">
          <p>
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. JavaScript is normally used for any client-side
          activity for one web application.Javascript is a Scripting language.
          It is mostly abbreviated as JS. It can be said that Javascript is the
          updated version of the ECMA script. Javascript is a high-level
          programming language that uses the concept of Oops but it is based on
          prototype inheritance. Otherwise,NodeJS is a cross-platform and
          opensource Javascript runtime environment that allows the javascript
          to be run on the server-side. Nodejs allows Javascript code to run
          outside the browser. Nodejs comes with a lot of modules and mostly
          used in web development.Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses, it requires libraries that can easily be accessed from
          JavaScript programming for better use.
          </p>
        </div>
      </div>
      <div className="border my-5"></div>
      <div className="flex question items-center justify-content-around">
        <div className="img-and-title">
          <h2>2. When should you use nodejs and when should you use mongodb</h2>
          <img src="https://i.ibb.co/wK6nKJp/download-9.jpg" alt="" />
        </div>
        <div className="mx-3">
          <p>
          Mongodb is a Database It is used for stored data . MongoDB is the
          Document Oriented Database. MongoDB stores a lot of data in JSON
          format. MongoDB's performance is much faster than any RDBMS. MongoDB
          is designed to work with Large Scale Data. MongoDB can work on
          multiple servers. MongoDB can handle a large number of access requests
          easily. and NodeJs is an asynchronous event-driven JavaScript runtime,
          Node.js is designed to build scalable network applications.It is an
          open source server environment; Node.js is free; Node.js runs on
          various platforms (Windows, Linux, Unix, Mac OS X, etc.)
          </p>
        </div>
      </div>
      <div className="border my-5"></div>
      <div className="flex question items-center justify-content-around">
        <div className="img-and-title">
          <h2>3. Differences between sql and nosql databases.</h2>
          <img src="https://i.ibb.co/yR8smTG/download-10.jpg" alt="" />
        </div>
        <div className="mx-3">
          <p>
          SQL databases are primarily called as Relational Databases (RDBMS);
          whereas NoSQL database are primarily called as non-relational or
          distributed database. SQL databases defines and manipulates data based
          structured query language (SQL). Seeing from a side this language is
          extremely powerful. SQL is one of the most versatile and widely-used
          options available which makes it a safe choice especially for great
          complex queries.SQL requires you to use predefined schemas to
          determine the structure of your data before you work with it. Also all
          of your data must follow the same structure. SQL databases are
          vertically scalable, while NoSQL databases are horizontally scalable.
          SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores. SQL databases are better for
          multi-row transactions, while NoSQL is better for unstructured data
          like documents or JSON.
          </p>
        </div>
      </div>
      <div className="border my-5"></div>
      <div className="flex question items-center justify-content-around">
        <div className="img-and-title">
          <h2>4.What is the purpose of jwt and how does it work</h2>
          <img src="https://i.ibb.co/k6JHs35/download-1.png" alt="" />
        </div>
        <div className="mx-3">
          <p>
          Jwt, jwt means json web token. It is an open standard used to share
          security information between two parties — a client and a server.jwt
          is use for authorization. This is the most common scenario for using
          JWT. Once the user is logged in, each subsequent request will include
          the JWT, allowing the user to access routes, services, and resources
          that are permitted with that token. Single Sign On is a feature that
          widely uses JWT nowadays, because of its small overhead and its
          ability to be easily used across different domains.JSON Web Tokens are
          also a good way of securely transmitting information between parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
