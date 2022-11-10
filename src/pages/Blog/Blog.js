import React from "react";

const Blog = () => {
  return (
    <div className="my-10">
      <div className="border bg-green-600 text-white p-4 rounded">
        <h3 className="text-xl font-semibold">
          Difference between SQL and NoSQL?
        </h3>
        <div className="p-6 text-xl">
          <ul className="list-disc">
            <li>
              SQL databases are relational, NoSQL databases are non-relational.
            </li>
            <li>
              SQL databases use structured query language and have a predefined
              schema. NoSQL databases have dynamic schemas for unstructured
              data.
            </li>
            <li>
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable.
            </li>
            <li>
              SQL databases are table-based, while NoSQL databases are document,
              key-value, graph, or wide-column stores.
            </li>
            <li>
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.
            </li>
          </ul>
        </div>
      </div>
      <div className="border bg-green-600 text-white rounded mt-10">
        <h3 className="text-xl font-semibold p-6">
          What is JWT, and how does it work?
        </h3>
        <div className="p-6 text-xl">
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server.
            <br />
            <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
        </div>
      </div>
      <div className="border bg-green-600 text-white rounded mt-10">
        <h3 className="text-xl font-semibold p-6">
          What is the difference between javascript and NodeJS?
        </h3>
        <div className="p-6 text-xl">
          <p>
            <span className="underline-offset-4 underline">NodeJS</span>
            <br />
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
            <br />
            <br />
            <span className="underline-offset-4 underline">Javascript</span>
            <br />
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.
          </p>
        </div>
      </div>
      <div className="border bg-green-600 text-white rounded mt-10">
        <h3 className="text-xl font-semibold p-6">
          How does NodeJS handle multiple requests at the same time?
        </h3>
        <div className="p-6 text-xl">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue.
            <br />
            <br />
            If NodeJS can process the request without I/O blocking then the
            event loop would itself process the request and sends the response
            back to the client by itself. But, it is possible to process
            multiple requests parallelly using the NodeJS cluster module or
            worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
