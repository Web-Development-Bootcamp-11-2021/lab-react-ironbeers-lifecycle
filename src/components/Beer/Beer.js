import React, { useState } from 'react';

const Beer = ({ image_url, name, tagline, contributed_by }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="card col col-lg-8">
            <div className="row">
              <div className="col-sm-3 d-grid gap-1">
                <img className="d-block w-100 p-4" src={image_url} alt="" />
              </div>
              <div className="beer-info col-sm-7 text-start d-flex flex-column justify-content-around">
                <h2>
                  <b>{name}</b>
                </h2>
                <h3 className="text-muted">{tagline}</h3>
                <h5>
                  <b>Created by {contributed_by}</b>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beer;
