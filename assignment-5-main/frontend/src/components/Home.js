import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const handleRecipeClick = (recipeName) => {
    alert(`You clicked on the recipe for ${recipeName}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Home</h1>

      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?Pavbhaji" className="card-img-top" alt="Recipe 1" />
            <div className="card-body">
              <h5 className="card-title">Recipe 1</h5>
              <p className="card-text">
                Description of Recipe 1. You can add details about the ingredients and preparation here.
              </p>
              <button className="btn btn-primary" onClick={() => handleRecipeClick('Recipe 1')}>Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?idli" className="card-img-top" alt="Recipe 2" />
            <div className="card-body">
              <h5 className="card-title">Recipe 2</h5>
              <p className="card-text">
                Description of Recipe 2. Add details about the ingredients and preparation here.
              </p>
              <button className="btn btn-primary" onClick={() => handleRecipeClick('Recipe 2')}>Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?Samosa" className="card-img-top" alt="Recipe 2" />
            <div className="card-body">
              <h5 className="card-title">Recipe 3</h5>
              <p className="card-text">
                Description of Recipe 2. Add details about the ingredients and preparation here.
              </p>
              <button className="btn btn-primary" onClick={() => handleRecipeClick('Recipe 2')}>Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?cake" className="card-img-top" alt="Recipe 2" />
            <div className="card-body">
              <h5 className="card-title">Recipe 4</h5>
              <p className="card-text">
                Description of Recipe 2. Add details about the ingredients and preparation here.
              </p>
              <button className="btn btn-primary" onClick={() => handleRecipeClick('Recipe 2')}>Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?Pizza" className="card-img-top" alt="Recipe 2" />
            <div className="card-body">
              <h5 className="card-title">Recipe 5</h5>
              <p className="card-text">
                Description of Recipe 2. Add details about the ingredients and preparation here.
              </p>
              <button className="btn btn-primary" onClick={() => handleRecipeClick('Recipe 2')}>Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?Icecream" className="card-img-top" alt="Recipe 2" />
            <div className="card-body">
              <h5 className="card-title">Recipe 6</h5>
              <p className="card-text">
                Description of Recipe 2. Add details about the ingredients and preparation here.
              </p>
              <button className="btn btn-primary" onClick={() => handleRecipeClick('Recipe 2')}>Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?juice" className="card-img-top" alt="Recipe 2" />
            <div className="card-body">
              <h5 className="card-title">Recipe 7</h5>
              <p className="card-text">
                Description of Recipe 2. Add details about the ingredients and preparation here.
              </p>
              <button className="btn btn-primary" onClick={() => handleRecipeClick('Recipe 2')}>Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://source.unsplash.com/random/1920x1080/?Dosa" className="card-img-top" alt="Recipe 2" />
            <div className="card-body">
              <h5 className="card-title">Recipe 8</h5>
              <p className="card-text">
                Description of Recipe 2. Add details about the ingredients and preparation here.
              </p>
              <button className="btn btn-primary" onClick={() => handleRecipeClick('Recipe 2')}>Learn More</button>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default Home;
