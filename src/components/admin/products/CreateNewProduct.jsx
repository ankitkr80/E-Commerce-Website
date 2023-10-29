import React from 'react'

function CreateNewProduct() {
  return (
    <div
    className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className="container bg-dark text-white d-flex align-content-center col-sm-10 col-lg-6 flex-column justify-content-center p-3 px-5"
        style={{ border: "5px solid white" }}
      >
        <h1 className="align-self-center">REGEX</h1>
        <label className="align-self-center">Please fill this form to create new product</label>
        <form className="container bg-light text-dark p-3 d-flex align-content-center flex-column mb-2 justify-content-center">
          <div className="m-2">
            <label for="name" className="form-label">
              Product Name
            </label>
            <input
              type="name"
              class="form-control"
              placeholder="Enter your name"
              aria-label="name"
            ></input>
          </div>
          <div className="m-2">
            <label for="Price" className="form-label">
              Price
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your phone number"
              aria-label="price"
            ></input>
            <div className="invalid-feedback">
              Valid Price is required.
            </div>
          </div>
          <div className="m-2">
            <label for="description" className="form-label">
              Product Description
            </label>
            <input
              type="description"
              class="form-control"
              placeholder="Enter your password"
              aria-label="description"
            ></input>
            <div className="invalid-feedback">Valid Description is required.</div>
          </div>

          <div className="m-2">
            <label for="stock" className="form-label">
              Product stock
            </label>
            <input
              type="Number"
              class="form-control"
              placeholder="Enter your password again"
              aria-label="stock"
            ></input>
            <div className="invalid-feedback">Valid stock is required.</div>
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">
              Set Your Product Pic
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-50 align-self-center"
          >
            create new Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateNewProduct
