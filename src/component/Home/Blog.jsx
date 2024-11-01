import React from "react";
import blogPost1 from "./../../assets/images/blog-post-1.jpg";
import blogPost2 from "./../../assets/images/blog-post-2.jpg";
import blogPost3 from "./../../assets/images/blog-post-3.jpg";

const Blog = () => {
  const blogPosts = [
    {
      image: blogPost1,
      title: "Web Design 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi quos magni!",
      link: "#",
    },
    {
      image: blogPost2,
      title: "Web Design 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi quos magni!",
      link: "#",
    },
    {
      image: blogPost3,
      title: "Web Design 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi quos magni!",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">Recent News & Articles</h1>
              <div className="line"></div>
              <p>
                We love to craft digital experiences for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div
              className="col-md-4"
              data-aos="fade-down"
              data-aos-delay={(index + 1) * 100 + 150}
              key={index}
            >
              <div className="team-member image-zoom">
                <div className="image-zoom-wrapper">
                  <img src={post.image} alt={post.title} />
                </div>
                <h5 className="mt-4">{post.title}</h5>
                <p>{post.description}</p>
                <a href={post.link}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
