import 'bootstrap/dist/css/bootstrap.min.css';
import "./Blogs.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {

  const blogs = [
    {
      id: 1,
      title: "The Art of Baking Perfect Cakes",
      text: "Discover simple techniques to bake soft, moist, and delicious cakes every time.",
      author: "SweetTreats",
      date: "Jan 5, 2026",
    },
    {
      id: 2,
      title: "Top 5 Chocolate Treats Everyone Loves",
      text: "From truffles to brownies, explore chocolate desserts that everyone craves.",
      author: "Admin",
      date: "Jan 12, 2026",
    },
    {
      id: 3,
      title: "Why Fresh Ingredients Matter",
      text: "Learn how fresh chocolate and ingredients can completely elevate your desserts.",
      author: "Chef Anna",
      date: "Jan 20, 2026",
    },
    {
      id: 4,
      title: "Easy Desserts for Beginners",
      text: "New to baking? Start with these quick and easy chocolate recipes.",
      author: "SweetTreats Team",
      date: "Jan 25, 2026",
    },
    {
      id: 5,
      title: "Chocolate Desserts Guide",
      text: "A guide to creating the most decadent chocolate desserts at home.",
      author: "Chef Mark",
      date: "Feb 2, 2026",
    },
    {
      id: 6,
      title: "Secrets of Bakery Chefs",
      text: "Professional tricks to make your chocolate desserts look bakery-quality.",
      author: "SweetTreats Team",
      date: "Feb 10, 2026",
    },
  ];

  return (
    <div className="blogs-section">

      <div className="container">
        <h1 className="blog-title">🍫 SweetTreats Chocolate Blogs</h1>

        <div className="row">
          {blogs.map((blog) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={blog.id}>
              <div className="blog-card">
                <div className="blog-card-body">
                  <h5 className="blog-card-title">{blog.title}</h5>
                  <p className="blog-card-text">{blog.text}</p>
                  <button className="read-btn">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
                <div className="blog-card-footer">
                  <span className="me-3">
                    <FontAwesomeIcon icon={faUser} /> {blog.author}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCalendar} /> {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Blogs;