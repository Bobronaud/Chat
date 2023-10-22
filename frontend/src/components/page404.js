const Page404 = () => {
  return (
    <body className="h-100 bg-light">
      <div className="h-100">
        <div className="h-100" id="chat">
          <div className="d-flex flex-column h-100">
            <div className="text-center alert">
              <h1 className="h4 text-muted">Страница не найдена</h1>
              <p className="text-muted">
                Но вы можете перейти <a href="/">на главную страницу</a>
              </p>
            </div>
          </div>
          <div className="Toastify"></div>
        </div>
      </div>
    </body>
  );
};

export default Page404;
