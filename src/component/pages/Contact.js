const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Example label
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Another label
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
